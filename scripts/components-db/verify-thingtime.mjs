// Cross-check against a checkout of the application, using its tsx loader:
// THINGTIME_SOURCE=/path/to/thingtime node --import /path/to/thingtime/remix/node_modules/tsx/dist/loader.mjs scripts/components-db/verify-thingtime.mjs
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildCatalog } from './lib/catalog.mjs';
import { resolveTemplate as catalogResolve, defaultsFromArgs } from './lib/resolve.mjs';
if (!process.env.THINGTIME_SOURCE) throw new Error('Set THINGTIME_SOURCE to the application checkout');
const load = p => import(pathToFileURL(path.join(process.env.THINGTIME_SOURCE, p)).href);
const { validateThingtimeCrystal } = await load('remix/app/schemas/registry.ts');
const { resolveTemplate } = await load('remix/app/components/ComponentsLibrary/componentTemplate.ts');
const { HTML_ALLOWED_TAGS } = await load('remix/app/components/Kinds/htmlRenderPolicy.ts');
const { definitions } = await buildCatalog();
for (const original of definitions) {
	const def = JSON.parse(JSON.stringify(original));
	const result = validateThingtimeCrystal(['component'], { ...def, componentKey: def.slug });
	assert.equal(result.ok, true, `${def.slug}: ${result.error}`);
	const defaults = defaultsFromArgs(def.args);
	const actual = resolveTemplate(def.render, defaults);
	assert.deepEqual(actual, catalogResolve(def.render, defaults), `${def.slug}: resolver drift`);
	const walk = x => { if (!x || typeof x !== 'object') return; if (x.tag) assert.ok(HTML_ALLOWED_TAGS.has(x.tag), `${def.slug}: unsupported ${x.tag}`); Object.values(x).forEach(walk); };
	walk(actual);
}
console.log(`Application sanitizer, resolver and native tags accepted all ${definitions.length} definitions.`);
