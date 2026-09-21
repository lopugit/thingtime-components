// Functional contracts shared by every library rendition. The authored art
// remains the preview; controls change state locally and records are saved by
// a real, owner-scoped Thingtime Action. Integration examples save drafts.
import { functionalWidget } from './functionalWidgets.mjs';
import { countServerRenderNodes } from './validate.mjs';
import { el, arg, iff } from './helpers.mjs';

const SAVE = 'demo-catalog-records-save';
const cosmetic = new Set(['tone', 'size', 'disabled', 'ring', 'bordered', 'dense', 'gradient', 'elevation', 'iconOnly', 'rounded', 'filled', 'actionKey', 'actionLabel', 'showIcon', 'showLabel', 'pill', 'gap']);
const secrets = /password|secret|token|api.?key|last4|expiry|holder/i;
const localKeys = new Set(['checked', 'checkedA', 'checkedB', 'checkedC', 'selected', 'active', 'current', 'on', 'enabled', 'unread', 'starred', 'liked', 'isFollowing', 'shortlisted', 'saved', 'pinned', 'resolved', 'expanded', 'open', 'agreed', 'saidYes', 'billing', 'remember', 'monthly', 'autoDetect', 'reduceMotion', 'srHints', 'dyslexiaFont', 'mentionsPush', 'mentionsEmail', 'cc', 'original', 'revealed', 'added', 'showTeaser']);
const external = new Set(['banking', 'crypto-trading', 'smart-home', 'automotive', 'commerce', 'food-delivery', 'events-tickets', 'schedule', 'mail', 'chat', 'ai-assistant', 'real-estate', 'security-privacy', 'charity-community', 'logistics', 'job-hiring']);
const labelOf = (node) => typeof node === 'string' ? node : Array.isArray(node) ? node.map(labelOf).join(' ') : node && typeof node === 'object' ? labelOf(node.children) : '';
const all = (value, visit) => {
	if (!value || typeof value !== 'object') return;
	if (Array.isArray(value)) return value.forEach((node) => all(node, visit));
	visit(value);
	Object.values(value).forEach((node) => all(node, visit));
};
const ui = (node, input) => {
	node.ttAction = '$ui'; node.ttActionInputs = input;
	if (!['input', 'select', 'textarea', 'button'].includes(node.tag)) node.tag = 'button';
	node.props = { ...node.props, type: node.tag === 'button' ? 'button' : node.props?.type };
	return node;
};
const directChoice = (props, specs) => {
	let found;
	all(props, (part) => {
		const test = part.ttIf;
		if (found || !test || !specs.some((spec) => spec.name === test.arg && (localKeys.has(test.arg) || (['enum', 'boolean'].includes(spec.type) && !cosmetic.has(spec.name))))) return;
		found = test.equals === undefined ? { op: 'toggle', key: test.arg } : { op: 'set', key: test.arg, value: test.equals };
	});
	return found;
};

export const functionalDefinition = (definition, lib, archetype, variant) => {
	const def = structuredClone(definition);
	// Eight persisted fields at 500 characters each fit the Action's 5000-character contract.
	for (const spec of def.args) if (['string', 'text'].includes(spec.type)) {
		spec.maxLength = Math.min(spec.maxLength || 500, 500);
		if (typeof spec.default === 'string') spec.default = spec.default.slice(0, spec.maxLength);
	}
	const family = `${archetype}-${variant}`;
	const addArg = (name, type = 'string', value = '') => {
		if (!def.args.some((spec) => spec.name === name)) def.args.push({ name, type, default: value, maxLength: type === 'string' ? 500 : undefined });
		return name;
	};
	addArg('actionKey', 'string', SAVE);
	addArg('actionLabel', 'string', external.has(archetype) ? 'Save draft' : 'Save record');
	def.args.find((spec) => spec.name === 'actionKey').label = 'Action to run';
	def.args.find((spec) => spec.name === 'actionLabel').label = 'Action label';
	def.args.find((spec) => spec.name === 'actionLabel').default = external.has(archetype) ? 'Save draft' : 'Save record';
	const defaults = Object.fromEntries(def.args.map((spec) => [spec.name, spec.default]));
	const caption = (node) => labelOf(node).replace(/\{(\w+)\}/g, (_, key) => String(defaults[key] ?? '')).trim();
	let buttonIndex = 0, fieldIndex = 0, dismissed = false, records = false;
	const savedSpecs = () => {
		const fields = new Set();
		all(def.render, (node) => { if (node.ttAction === '$ui' && node.ttActionInputs?.key) fields.add(node.ttActionInputs.key); });
		return def.args.filter((spec) => !cosmetic.has(spec.name) && !secrets.test(spec.name) && !(archetype === 'dev-tools' && variant === 'env-vars' && spec.name === 'value') && !spec.name.startsWith('ui')).sort((a, b) => Number(fields.has(b.name)) - Number(fields.has(a.name))).slice(0, 8);
	};
	const details = () => savedSpecs().map((spec) => `${spec.label || spec.name}: {${spec.name}}`).join('\n').slice(0, 1800);
	const save = (node, title = def.name) => {
		records = true;
		const sizing = { width: 'auto', height: 'auto', minWidth: 0, padding: '8px 12px', whiteSpace: 'normal' };
		const authoredStyle = node.props?.style || { border: `1px solid ${lib.border}`, borderRadius: lib.radius.sm, background: lib.surfaceAlt };
		const buttonStyle = authoredStyle.ttMerge ? { ttMerge: [...authoredStyle.ttMerge, sizing] } : { ...authoredStyle, ...sizing };
		node.ttAction = SAVE;
		node.ttActionInputs = { family, title, details: details() };
		node.props = { ...node.props, style: buttonStyle, type: 'button', 'aria-label': `Save ${title} ${external.has(archetype) ? 'draft' : 'record'}` };
		node.children = ['{actionLabel}'];
		return node;
	};
	const dismiss = (node) => { dismissed = true; addArg('uiDismissed', 'boolean', false); return ui(node, { op: 'set', key: 'uiDismissed', value: true }); };
	const walk = (value, insideButton = false) => {
		if (!value || typeof value !== 'object') return value;
		if (Array.isArray(value)) return value.map((node) => walk(node, insideButton));
		let node = value;
		if (node.tag) {
			const label = caption(node);
			if (node.props?.style && !node.props.style.ttMerge) {
				// Fixed-width authored cards must also fit a phone-sized container.
				if (node.props.style.width) node.props.style.maxWidth = '100%';
				if (node.props.style.cursor === 'pointer' && node.tag !== 'button') delete node.props.style.cursor;
			}
			if (['input', 'textarea', 'select'].includes(node.tag)) {
				const match = typeof node.props?.value === 'string' && node.props.value.match(/^\{(\w+)\}$/);
				const key = match?.[1] || addArg(`entry${++fieldIndex}`);
				if (!node.props?.disabled && node.props?.type !== 'password') {
					ui(node, { op: 'set', key });
					node.props = { ...node.props, value: arg(key), 'aria-label': node.props?.placeholder || key, maxLength: 500 };
					delete node.props.name;
				}
			} else if (node.tag === 'button') {
				const index = buttonIndex++;
				if (defaults.disabled !== undefined) node.props = { ...node.props, disabled: arg('disabled') };
				const choice = directChoice(node.props, def.args);
				if (choice) ui(node, choice);
				else if (archetype === 'tabs-steps' && variant !== 'steps' && variant !== 'steps-numbered') ui(node, { op: 'set', key: 'active', value: String(index + 1) });
				else if (archetype === 'breadcrumb-pagination') ui(node, /^\d+$/.test(label) ? { op: 'set', key: 'page', value: label } : { op: 'increment', key: variant === 'summary' ? 'from' : 'page', step: index === 0 ? -1 : 1, min: 1, max: defaults.pages || 5 });
				else if (['onboarding', 'form-flows'].includes(archetype) && /^(Back|Next|Continue)/i.test(label) && defaults.step !== undefined) ui(node, { op: 'increment', key: 'step', step: /^Back/.test(label) ? -1 : 1, min: 1, max: defaults.total || 4 });
				else if (archetype === 'smart-home' && variant === 'thermostat') ui(node, { op: 'increment', key: 'temp', step: index === 0 ? -1 : 1, min: 5, max: 35 });
				else if (archetype === 'accessibility' && variant === 'a11y-menu') ui(node, /Reset/.test(label) ? { op: 'reset' } : { op: 'increment', key: 'textSize', step: index === 0 ? -10 : 10, min: 70, max: 200 });
				else if (/^(Cancel|Dismiss|Later|Skip for now|Close|Leave)$/.test(label) || (['modal-drawer', 'alert'].includes(archetype) && !label)) dismiss(node);
				else if (/^Clear/.test(label)) ui(node, { op: 'reset' });
				else if (/^Copy/.test(label)) ui(node, { op: 'copy', value: defaults.code !== undefined ? '{code}' : details() });
				else if (/^Follow$/.test(label) && def.args.some((spec) => spec.name === 'isFollowing')) ui(node, { op: 'toggle', key: 'isFollowing' });
				else if (archetype === 'search-command' && variant === 'search-bar') ui(node, { op: 'search', value: '{entry1}' });
				else if (archetype === 'button' || archetype === 'marketing' || archetype === 'empty-states') {
					if (archetype === 'button' && variant === 'ghost') dismiss(node);
					else save(node);
				} else save(node);
			} else if (node.tag === 'a' && (!node.props?.href || node.props.href === '#')) node.props = { ...node.props, href: '/things' };
			else if (!insideButton && ['div', 'span'].includes(node.tag)) {
				const choice = directChoice(node.props, def.args);
				if (choice && !['data-viz', 'stat-metric', 'card', 'avatar', 'badge'].includes(archetype)) {
					// Don't create nested interactive elements.
					let nested = false; all(node.children, (part) => { if (['button', 'input', 'select', 'textarea', 'a'].includes(part.tag)) nested = true; });
					if (!nested) {
						ui(node, choice);
						node.props = { ...node.props, 'aria-label': label || choice.key, 'aria-pressed': choice.op === 'toggle' ? arg(choice.key) : { ttIf: { arg: choice.key, equals: choice.value, then: true, else: false } } };
					}
				}
			}
		}
		for (const [key, child] of Object.entries(node)) if (!['props', 'ttAction', 'ttActionInputs'].includes(key)) node[key] = walk(child, insideButton || node.tag === 'button' || node.tag === 'a');
		return node;
	};
	def.render = functionalWidget(def, lib, archetype, variant) || walk(def.render);
	// Every data-bearing component has an editable, persistent counterpart.
	// The native disclosure keeps simple badges and cards compact until needed.
	const editable = savedSpecs();
	const field = (spec) => {
		const props = { 'aria-label': spec.label || spec.name, value: arg(spec.name), maxLength: Math.min(spec.maxLength || 500, 500), style: { width: '100%', minWidth: 0, padding: '8px', border: `1px solid ${lib.border}` } };
		let node;
		if (spec.type === 'enum') node = el('select', props, spec.values.map((value) => el('option', { value }, value)));
		else if (spec.type === 'boolean') node = el('input', { 'aria-label': spec.label || spec.name, type: 'checkbox', checked: arg(spec.name) });
		else node = el(spec.type === 'text' ? 'textarea' : 'input', { ...props, type: spec.type === 'number' ? 'number' : 'text', ...(spec.min === undefined ? {} : { min: spec.min }), ...(spec.max === undefined ? {} : { max: spec.max }) });
		return el('label', {}, `${spec.label || spec.name} `, ui(node, { op: 'set', key: spec.name }));
	};
	const editor = el('details', {}, el('summary', {}, 'Edit and save'), el('fieldset', { style: { display: 'grid', gap: '8px', border: 0, minWidth: 0 } }, editable.map(field), save(el('button', { type: 'button' }), def.name), ui(el('button', { type: 'button' }, 'Reset values'), { op: 'reset' })));
	if (dismissed) def.render = iff('uiDismissed', ui(el('button', { type: 'button' }, 'Show again'), { op: 'set', key: 'uiDismissed', value: false }), def.render);
	def.render = el('div', { style: { fontFamily: lib.font, maxWidth: '100%', minWidth: 0 } }, def.render, editor,
		external.has(archetype) ? el('small', {}, 'Draft only. Saving creates a private Thing. External effects require a configured Action.') : null);
	// Apply the same responsive sizing to merged/conditional style branches.
	all(def.render, (node) => {
		if (node.width && (node.display || node.padding || node.background || node.border || node.borderWidth)) { node.maxWidth = '100%'; node.boxSizing = 'border-box'; }
		if (typeof node.minWidth === 'string' && parseFloat(node.minWidth) >= 200) node.minWidth = 0;
		if (['flex', 'inline-flex'].includes(node.display) && node.flexDirection !== 'column' && !node.flexWrap) node.flexWrap = 'wrap';
		if (typeof node.gridTemplateColumns === 'string') node.gridTemplateColumns = node.gridTemplateColumns.replace(/\b1fr\b/g, 'minmax(0, 1fr)');
	});
	// Remove inherited duplicates first; if a dense authored illustration is
	// near the storage cap, shorten only the optional editor, never the controls.
	all(def.render, (node) => { if (node.props?.style?.fontFamily === lib.font) delete node.props.style.fontFamily; });
	const form = editor.children[1];
	while (countServerRenderNodes(def.render) > 580 && form.children.length > 2) form.children.shift();
	all(def.render, (node) => { if (node.ttAction === SAVE) { node.ttAction = '{actionKey}'; node.ttActionInputs.details = details(); node.props['aria-label'] = '{actionLabel}'; } });
	def.description = `${def.description.slice(0, 350)} Interactive controls and editable values; saves private Things through an Action.`;
	return def;
};
