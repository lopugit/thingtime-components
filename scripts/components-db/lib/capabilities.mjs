export const REQUIRED_CAPABILITIES = {
	'api.login': '1.0.0',
	'api.admin-components-seed': '1.0.0',
	'api.webpages-suites-install': '1.1.0'
};
const semver = value => typeof value === 'string' && /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(value) ? value.split('.').map(Number) : null;
export function verifyCapabilities(manifest, origin) {
	if (manifest?.origin !== origin || manifest?.schemaVersion !== 1) throw new Error('Capability manifest does not match the selected origin');
	for (const [feature, version] of Object.entries(REQUIRED_CAPABILITIES)) {
		const actual = semver(manifest.features?.[feature]?.version), minimum = semver(version);
		if (!actual || actual[0] !== minimum[0] || actual[1] < minimum[1] || (actual[1] === minimum[1] && actual[2] < minimum[2])) throw new Error(`Requires ${feature} >= ${version} with the same major version`);
	}
}
