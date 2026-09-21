import assert from 'node:assert/strict';
import test from 'node:test';
import { buildCatalog } from './lib/catalog.mjs';
import { defaultsFromArgs, resolveTemplate } from './lib/resolve.mjs';
import { validateDefinition } from './lib/validate.mjs';
const { definitions, errors, missing } = await buildCatalog();
const walk = (x, fn) => { if (!x || typeof x !== 'object') return; if (Array.isArray(x)) return x.forEach(y => walk(y, fn)); fn(x); Object.values(x).forEach(y => walk(y, fn)); };
const resolved = (def, args = {}) => resolveTemplate(def.render, { ...defaultsFromArgs(def.args), ...args });
const nodes = (tree, predicate) => { const out = []; walk(tree, x => { if (predicate(x)) out.push(x); }); return out; };
const family = (id) => definitions.find(d => d.familyKey === id);

test('every catalog rendition has an executable save control, valid fields and no dead buttons', () => {
	assert.deepEqual(errors, []); assert.deepEqual(missing, []); assert.equal(definitions.length, 2800);
	for (const def of definitions) {
		const tree = resolved(def), specs = new Set(def.args.map(s => s.name));
		assert.deepEqual(validateDefinition(def), [], def.slug);
		assert.ok(nodes(tree, x => x.props?.['data-tt-action'] === 'demo-catalog-records-save').length, def.slug);
		for (const node of nodes(tree, x => x.tag === 'button')) assert.ok(node.props?.['data-tt-action'], `${def.slug}: unbound button`);
		for (const node of nodes(def.render, x => x.ttAction === '$ui' && x.ttActionInputs?.key)) assert.ok(specs.has(node.ttActionInputs.key), `${def.slug}: missing ${node.ttActionInputs.key}`);
		for (const field of def.args.filter(x => /password|secret|token|api.?key|last4|expiry|holder/i.test(x.name))) {
			const saveTree = resolved(def, { [field.name]: 'PRIVATE_FIELD_SENTINEL' });
			for (const control of nodes(saveTree, x => x.props?.['data-tt-action'] === 'demo-catalog-records-save')) assert.ok(!control.props['data-tt-action-inputs'].includes('PRIVATE_FIELD_SENTINEL'), `${def.slug}: secret field ${field.name} in save`);
		}
		for (const node of nodes(tree, x => x.tag === 'a')) assert.ok(node.props?.href && node.props.href !== '#', `${def.slug}: empty navigation`);
		for (const node of nodes(tree, x => x.props?.['data-tt-action'] === 'demo-catalog-records-save')) {
			const input = JSON.parse(node.props['data-tt-action-inputs']);
			assert.ok(input.details.length <= 5000, `${def.slug}: oversized save`);

		}
	}
});
test('pagination changes records, tabs switch editable panels and wizard steps show different fields', () => {
	const page = family('breadcrumb-pagination-pagination');
	assert.match(JSON.stringify(resolved(page, { page: '1' })), /Sample record 1/);
	assert.match(JSON.stringify(resolved(page, { page: '5' })), /Sample record 15/);
	assert.doesNotMatch(JSON.stringify(resolved(page, { page: '5' })), /Sample record 1"/);
	for (const [id, key, first, second] of [['tabs-steps-pills', 'active', 'panel1', 'panel2'], ['form-flows-wizard', 'step', 'name', 'email']]) {
		const def = family(id);
		const primary = tree => tree.children[0];
		assert.ok(nodes(primary(resolved(def, { [key]: '1' })), x => x.tag === 'input' && x.props?.['aria-label'] === first).length);
		assert.ok(nodes(primary(resolved(def, { [key]: '2' })), x => x.tag === 'input' && x.props?.['aria-label'] === second).length);
	}
});
test('native behaviors are used for media, dialog, countdown and selected values persist', () => {
	const media = family('media-player-video');
	assert.equal(nodes(resolved(media), x => x.tag === 'video').length, 0);
	assert.equal(nodes(resolved(media, { mediaUrl: 'https://example.com/movie.mp4' }), x => x.tag === 'video').length, 1);
	assert.ok(nodes(resolved(family('modal-drawer-dialog')), x => x.tag === 'tt-dialog').length);
	assert.ok(nodes(resolved(family('date-time-countdown')), x => x.tag === 'tt-countdown').length);
	const select = resolved(family('select-menu-closed'), { selection: 'Japan' });
	assert.ok(nodes(select, x => x.props?.['data-tt-action-inputs']?.includes('Japan')).length);
});
test('multi-select choices remain independent and the saved record contains both states', () => {
	const def = family('select-menu-multi');
	const selected = resolved(def, { selectedA: false, selectedB: true });
	const primary = selected.children[0];
	assert.deepEqual(nodes(primary, x => x.tag === 'input' && x.props?.type === 'checkbox').map(x => x.props.checked), [false, true]);
	assert.equal(nodes(primary, x => x.tag === 'button').length, 1);
	assert.match(JSON.stringify(primary), /Remove Platform/);
	assert.doesNotMatch(JSON.stringify(primary), /Remove Design/);
	const save = nodes(selected, x => x.props?.['data-tt-action'] === 'demo-catalog-records-save')[0];
	const details = JSON.parse(save.props['data-tt-action-inputs']).details;
	assert.match(details, /First tag selected: false/);
	assert.match(details, /Second tag selected: true/);
});
