import { el, arg, iff, ifEq, map } from './helpers.mjs';

// Patterns that require native behavior, rather than an editable drawing.
export const functionalWidget = (def, lib, archetype, variant) => {
	const has = (name) => def.args.some((spec) => spec.name === name);
	const add = (name, type, value, extra = {}) => {
		if (!has(name)) def.args.push({ name, type, default: value, ...extra });
	};
	const style = { display: 'grid', gap: '12px', padding: '16px', border: `1px solid ${lib.border}`, borderRadius: lib.radius.md, background: lib.surface, color: lib.text, minWidth: 0, maxWidth: '100%' };
	const bound = (node, key) => ({ ...node, ttAction: '$ui', ttActionInputs: { op: 'set', key } });
	const button = (label, input) => ({ tag: 'button', props: { type: 'button', style: { padding: '8px 12px', borderRadius: lib.radius.sm, border: `1px solid ${lib.border}`, background: lib.surfaceAlt, cursor: 'pointer' } }, children: [label], ttAction: '$ui', ttActionInputs: input });
	const input = (name, type = 'text', props = {}) => bound(el('input', { type, 'aria-label': name, value: arg(name), style: { width: '100%', minWidth: 0, padding: '8px', border: `1px solid ${lib.border}` }, ...props }), name);
	const choose = (key, values, labels = values) => el('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } }, values.map((value, index) => {
		const node = button(labels[index], { op: 'set', key, value });
		node.props['aria-pressed'] = ifEq(key, value, true, false);
		node.props.style.background = ifEq(key, value, lib.palette.primary.solid, lib.surfaceAlt);
		node.props.style.color = ifEq(key, value, lib.palette.primary.onSolid, lib.text);
		return node;
	}));
	const checkbox = (key, label) => el('label', {}, bound(el('input', { type: 'checkbox', checked: arg(key), 'aria-label': label }), key), label);
	if (archetype === 'social-feed' && variant === 'share-sheet') { add('shareUrl', 'string', 'https://thingtime.com', { maxLength: 500 }); return el('div', { style }, el('label', {}, 'Link to copy', input('shareUrl', 'url')), button('Copy link', { op: 'copy', value: '{shareUrl}' }), el('small', {}, 'Copying does not publish a post or change access permissions.')); }
	if (archetype === 'real-estate' && variant === 'tour') { add('selectedDate', 'string', '', { maxLength: 20 }); return el('div', { style }, el('h3', {}, 'Tour request draft'), el('label', {}, 'Date', input('selectedDate', 'date')), ['time', 'mode'].map(key => el('label', {}, key, bound(el('select', { value: arg(key), 'aria-label': key }, def.args.find(spec => spec.name === key).values.map(value => el('option', { value }, value))), key))), el('small', {}, 'Save your preferred date and time. Booking requires a configured integration Action.')); }
	if (archetype === 'navbar') {
		if (variant === 'search') { add('searchQuery', 'string', '', { maxLength: 200 }); return el('nav', { style }, el('strong', {}, '{brand}'), input('searchQuery', 'search'), button('Search Things', { op: 'search', value: '{searchQuery}' })); }
		return el('nav', { style: { ...style, display: 'flex', flexWrap: 'wrap' } }, has('brand') ? el('strong', {}, '{brand}') : null,
			[['Home', '/'], ['Things', '/things'], ['Components', '/components'], ['Demos', '/builder/demos']].map(([label, href]) => el('a', { href, style: { padding: '8px', textDecoration: 'underline' } }, label)));
	}
	if (archetype === 'forms-advanced') {
		if (variant === 'password') { add('password', 'string', '', { maxLength: 200 }); add('visible', 'boolean', false); return el('div', { style }, el('label', {}, '{label}', input('password', ifEq('visible', true, 'text', 'password'))), button('Show / hide password', { op: 'toggle', key: 'visible' }), el('small', {}, 'Local input only. The password is excluded from saved records.')); }
		if (variant === 'otp') { add('code', 'string', '', { maxLength: 8 }); return el('div', { style }, el('label', {}, 'Code draft', input('code', 'text', { maxLength: 8 })), el('small', {}, 'Verification requires your configured authentication Action.')); }
		const fields = variant === 'phone' ? ['prefix', 'number'] : variant === 'address' ? ['street', 'city', 'zip', 'country'] : ['tag1', 'tag2'];
		return el('div', { style }, fields.map(key => el('label', {}, key, input(key))));
	}
	if (archetype === 'productivity-notes') {
		if (variant === 'pomodoro') { add('seconds', 'number', 1500, { min: 1, max: 604800 }); return el('div', { style }, el('h3', {}, 'Focus timer'), el('label', {}, 'Duration in seconds', input('seconds', 'number', { min: 1, max: 604800 })), el('tt-countdown', { value: '{seconds}' })); }
		if (variant === 'todo') { add('completed', 'boolean', false); return el('div', { style }, el('h3', {}, '{list}'), checkbox('completed', '{task}')); }
		if (variant === 'habits') return el('div', { style }, el('h3', {}, '{habit}'), ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => { const key = `day${i + 1}`; add(key, 'boolean', false); return checkbox(key, day); }));
		add('content', 'text', '', { maxLength: 500 });
		return el('div', { style }, el('h3', {}, has('title') ? '{title}' : '{name}'), bound(el('textarea', { value: '{content}', rows: 5, maxLength: 500, 'aria-label': 'Content' }), 'content'), variant === 'snippet' ? button('Copy snippet', { op: 'copy', value: '{content}' }) : null);
	}
	if (archetype === 'dev-tools' && variant === 'env-vars') return el('div', { style }, el('h3', {}, '{name}'), input('value', 'text'), button('Copy value', { op: 'copy', value: '{value}' }), el('small', {}, 'Value is local only and excluded from saved records. Configure real credentials through connection settings.'));
	if (archetype === 'dev-tools' && variant === 'pipeline') return el('div', { style }, el('h3', {}, '{label}'), choose('stage', ['Build', 'Test', 'Deploy', 'Verify']), el('p', {}, 'Recorded stage: {stage}'), el('small', {}, 'Saves a pipeline record. Deployment requires a configured integration Action.'));
	if (archetype === 'dev-tools' && variant === 'logs') return el('div', { style }, el('h3', {}, '{service} sample logs'), choose('filter', ['all', 'payments', 'errors']), el('pre', { style: { whiteSpace: 'pre-wrap' } }, map('filter', { all: 'INFO: server ready\nINFO: payment draft prepared\nERROR: sample timeout', payments: 'INFO: payment draft prepared', errors: 'ERROR: sample timeout' }, 'No matching sample logs.')));
	if (archetype === 'support-help' && variant === 'faq') return el('details', { style }, el('summary', {}, '{question}'), el('p', {}, '{answer}'));
	if (archetype === 'photo-gallery') {
		add('imageUrl', 'string', '', { maxLength: 500 });
		add('rotation', 'number', 0, { min: 0, max: 360 });
		add('exposure', 'number', 100, { min: 10, max: 200 });
		const preview = ifEq('imageUrl', '', el('p', {}, 'Enter an image URL to view and adjust it.'), el('img', { src: '{imageUrl}', alt: has('caption') ? '{caption}' : 'Image preview', style: { width: '100%', maxHeight: '400px', objectFit: 'contain', filter: 'brightness({exposure}%)', transform: 'rotate({rotation}deg)' } }));
		return el('div', { style }, el('label', {}, 'Image URL', input('imageUrl', 'url')), el('div', { style: { overflow: 'hidden', minWidth: 0 } }, preview),
			variant === 'editor' ? el('label', {}, 'Exposure', input('exposure', 'range', { min: 10, max: 200 })) : null,
			button('Rotate image', { op: 'cycle', key: 'rotation', values: [0, 90, 180, 270] }),
			el('tt-dialog', { title: 'Image viewer', name: 'Open image viewer' }, preview), el('small', {}, 'Adjustments affect this preview. Save stores the image URL and settings in a private Thing.'));
	}
	if (archetype === 'modal-drawer') {
		const fields = variant === 'form' ? ['projectName', 'description'] : [];
		if (variant === 'confirm') { def.args.find((spec) => spec.name === 'title').default = 'Review this draft'; def.args.find((spec) => spec.name === 'body').default = 'Saving stores a private record. This example does not delete any file.'; }
		fields.forEach((key) => add(key, 'string', '', { maxLength: 500 }));
		return el('tt-dialog', { title: '{title}', name: `Open ${variant}`, type: variant === 'drawer' || variant === 'sheet' ? 'drawer' : 'modal' },
			el('div', { style }, has('body') ? el('p', {}, '{body}') : null,
				fields.map((key, i) => el('label', {}, `{label${i + 1}}`, input(key))),
				el('p', {}, 'Edit the values below and save a private draft. No external changes are made.')));
	}
	if (archetype === 'tooltip-popover') {
		return el('details', { style }, el('summary', {}, has('triggerLabel') ? '{triggerLabel}' : has('name') ? '{name}' : 'Options'),
			el('section', {}, has('title') ? el('h3', {}, '{title}') : null,
				has('label') ? el('p', {}, '{label}') : null, has('body') ? el('p', {}, '{body}') : null,
				has('bio') ? el('p', {}, '{bio}') : null,
				el('nav', {}, el('a', { href: '/things' }, 'Open Things'), ' · ', el('a', { href: '/builder' }, 'Open builder'))));
	}
	if (archetype === 'date-time' && variant === 'countdown') {
		add('seconds', 'number', 60, { min: 1, max: 604800, label: 'Duration in seconds' });
		return el('div', { style }, el('h3', {}, '{event}'), el('label', {}, 'Duration in seconds', input('seconds', 'number', { min: 1, max: 604800 })), el('tt-countdown', { value: '{seconds}' }));
	}
	if (archetype === 'onboarding' && variant === 'checklist') {
		return el('div', { style }, [1, 2, 3, 4].map((i) => { add(`completed${i}`, 'boolean', false); return checkbox(`completed${i}`, `{item${i}}`); }));
	}
	if ((archetype === 'onboarding' && variant === 'tour-step') || (archetype === 'form-flows' && variant === 'wizard')) {
		for (const [key, label] of [['name', 'Name'], ['email', 'Email'], ['notes', 'Notes']]) add(key, 'string', '', { label, maxLength: 500 });
		return el('div', { style }, el('h3', {}, 'Step {step} of 4'),
			map('step', { 1: el('label', {}, 'Name', input('name')), 2: el('label', {}, 'Email', input('email', 'email')), 3: el('label', {}, 'Notes', input('notes')), 4: el('p', {}, 'Review: {name} · {email} · {notes}') }),
			button('Back', { op: 'increment', key: 'step', step: -1, min: 1, max: 4 }), button('Next', { op: 'increment', key: 'step', min: 1, max: 4 }));
	}
	if (archetype === 'form-flows' && variant === 'signature') {
		add('signature', 'string', '', { maxLength: 200 });
		return el('div', { style }, el('label', {}, 'Typed signature draft', input('signature')), el('p', {}, '{signature}'), button('Clear signature', { op: 'set', key: 'signature', value: '' }), el('small', {}, 'A saved draft only. This does not sign an agreement.'));
	}
	if (archetype === 'choice-controls') {
		if (variant === 'checkbox' || variant === 'switch') return el('div', { style }, checkbox(variant === 'switch' ? 'on' : 'checked', '{label}'));
		if (variant === 'checkbox-group') return el('div', { style }, ['A', 'B', 'C'].map((letter) => checkbox(`checked${letter}`, `{label${letter}}`)));
		return el('div', { style }, choose(variant === 'radio-group' ? 'selected' : 'active', ['1', '2', '3'], ['{labelA}', '{labelB}', '{labelC}']));
	}
	if (archetype === 'select-menu') {
		add('selection', 'string', def.args.find((spec) => spec.name === 'value')?.default || '');
		const choices = def.args.filter((spec) => /^(option|result|item|tag)[A-C123]/.test(spec.name));
		const values = choices.length ? choices.map((spec) => `{${spec.name}}`) : ['Australia', 'Canada', 'Japan', 'New Zealand', 'United Kingdom'];
		return el('div', { style }, el('label', {}, has('label') ? '{label}' : 'Select an option', bound(el('select', { value: arg('selection'), 'aria-label': 'Select an option', disabled: has('disabled') ? arg('disabled') : false }, el('option', { value: '' }, 'Choose…'), values.map((value) => el('option', { value }, value))), 'selection')), el('p', {}, 'Selected: {selection}'));
	}
	if (archetype === 'tabs-steps') {
		const steps = variant.startsWith('steps');
		const key = steps ? 'current' : 'active';
		const labels = [1, 2, 3].map((i) => `{${steps ? 'step' : 'tab'}${i}}`);
		[1, 2, 3].forEach((i) => add(`panel${i}`, 'string', steps ? ['Enter your account details.', 'Describe your profile.', 'Review and save your progress.'][i - 1] : ['Your overview notes.', 'Record your latest activity.', 'Describe your preferred settings.'][i - 1], { maxLength: 500 }));
		return el('div', { style }, choose(key, ['1', '2', '3'], labels), el('section', {}, el('h3', {}, map(key, { 1: labels[0], 2: labels[1], 3: labels[2] })), map(key, { 1: input('panel1'), 2: input('panel2'), 3: input('panel3') })));
	}
	if (archetype === 'slider-progress') {
		const keys = variant === 'range' ? ['low', 'high'] : ['percent'];
		return el('div', { style }, keys.map((key) => el('label', {}, `${key}: {${key}}%`, input(key, 'range', { min: 0, max: 100, step: 1 }))));
	}
	if (archetype === 'rating') {
		const key = has('stars') ? 'stars' : has('hearts') ? 'hearts' : 'rating';
		add(key, 'number', 0, { min: 0, max: 5 });
		return el('div', { style }, choose(key, [1, 2, 3, 4, 5], ['1 ★', '2 ★', '3 ★', '4 ★', '5 ★']), el('p', {}, `Your rating: {${key}} / 5`));
	}
	if (archetype === 'media-player' || archetype === 'streaming-tv') {
		add('mediaUrl', 'string', '', { label: 'Media URL', maxLength: 500 });
		return el('div', { style }, el('label', {}, 'Media URL', input('mediaUrl', 'url')), ifEq('mediaUrl', '', null, el(archetype === 'media-player' && variant !== 'video' ? 'audio' : 'video', { src: '{mediaUrl}', controls: true, style: { width: '100%', maxHeight: '400px' } })), el('small', {}, 'Add a playable media URL to play, pause, seek, adjust volume, and use fullscreen.'));
	}
	if (archetype === 'date-time' && variant !== 'countdown') {
		add('selectedDate', 'string', '', { label: 'Date' });
		add('selectedTime', 'string', '', { label: 'Time' });
		return el('div', { style }, el('label', {}, 'Date', input('selectedDate', 'date')), el('label', {}, 'Time', input('selectedTime', 'time')), variant === 'range' ? el('label', {}, 'End date', input('end', 'date')) : null);
	}
	if (archetype === 'breadcrumb-pagination' && !variant.startsWith('breadcrumb')) { add('page', 'string', '1'); return el('div', { style }, choose('page', ['1', '2', '3', '4', '5']), el('p', {}, 'Page {page}'), el('ul', {}, map('page', Object.fromEntries([1, 2, 3, 4, 5].map((page) => [page, [1, 2, 3].map((row) => el('li', {}, `Sample record ${(page - 1) * 3 + row}`))]))))); }
	if (archetype === 'file-manager' && variant === 'upload') return el('div', { style }, el('tt-upload', { name: 'file', title: 'Upload a file' }), el('small', {}, 'Choose a file and confirm the upload. It is saved to your attachments.'));
	if (archetype === 'search-command') {
		add('searchQuery', 'string', '', { maxLength: 200 });
		return el('div', { style }, el('label', {}, 'Search Things', input('searchQuery', 'search')), button('Search Things', { op: 'search', value: '{searchQuery}' }));
	}
	if (archetype === 'code-block' && variant !== 'shortcuts') {
		add('code', 'text', variant === 'terminal' ? 'npm run dev' : 'const greeting = "Hello, Thingtime";', { maxLength: 1000 });
		return el('div', { style }, el('pre', { style: { whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' } }, el('code', {}, '{code}')), button('Copy code', { op: 'copy', value: '{code}' }));
	}
	if (archetype === 'timeline' && variant === 'tracking') return el('div', { style }, choose('stage', ['ordered', 'packed', 'shipped', 'delivered'], ['{step1}', '{step2}', '{step3}', '{step4}']), el('p', {}, 'Current stage: {stage}'));
	if (archetype === 'sports-scores' && variant === 'standings') return el('div', { style }, el('h3', {}, 'Standings'), el('table', {}, el('thead', {}, el('tr', {}, el('th', {}, 'Team'), el('th', {}, 'Points'))), el('tbody', {}, el('tr', {}, el('td', {}, '{team}'), el('td', {}, '{pts}')))), el('small', {}, 'Edit team and points, then save the standing as a Thing.'));
	return null;
};
