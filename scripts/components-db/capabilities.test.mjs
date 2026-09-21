import assert from 'node:assert/strict';
import test from 'node:test';
import { REQUIRED_CAPABILITIES, verifyCapabilities } from './lib/capabilities.mjs';
const origin = 'https://example.com';
const fixture = () => ({ schemaVersion: 1, origin, features: Object.fromEntries(Object.entries(REQUIRED_CAPABILITIES).map(([id, version]) => [id, { version }])) });
test('seeder accepts supported origin-scoped capability ranges', () => {
	assert.doesNotThrow(() => verifyCapabilities(fixture(), origin));
	const m=fixture(); m.features['api.webpages-suites-install'].version='1.2.3'; assert.doesNotThrow(()=>verifyCapabilities(m,origin));
});
test('seeder rejects wrong origins, missing, old and breaking features before login', () => {
	assert.throws(() => verifyCapabilities(fixture(), 'https://other.example'));
	for(const version of [undefined,'1.0.9','2.0.0','1.1.0-beta']) { const m=fixture(); m.features['api.webpages-suites-install'].version=version; assert.throws(()=>verifyCapabilities(m,origin)); }
});
