#!/usr/bin/env node
// Export the committed folder database for Thingtime's admin catalog importer.
// Usage: node scripts/components-db/export.mjs > /tmp/thingtime-catalog.json
import { readFile, readdir } from 'node:fs/promises';
const root = new URL('../../components-db/components/', import.meta.url);
const components = [];
for (const library of (await readdir(root)).sort()) {
  const directory = new URL(`${library}/`, root);
  for (const file of (await readdir(directory)).filter(name => name.endsWith('.json')).sort()) {
    components.push(JSON.parse(await readFile(new URL(file, directory), 'utf8')));
  }
}
process.stdout.write(JSON.stringify({ components }));
