# thingtime-components 🧩🌈

The open component catalog for [Thingtime](https://github.com/lopugit/thingtime)
— an *awesome-thingtime*-style folder database of UI components that render
inside Thingtime's sanitising component runtime, plus the deterministic
generator/validator/seeder pipeline that produces and publishes them.

Every component is a plain JSON definition: an arg-templated render tree drawn
only through Thingtime's allowlist renderers, arg descriptors that become a
live tester on `/components`, and metadata (library, category, tags). No
executable code ships in this repo's catalog — templates are data, resolved
and sanitised by the Thingtime app at render time.

## What's inside

| Path | What it is |
| --- | --- |
| `components-db/components/<library>/<slug>.json` | The folder database — one JSON per component |
| `components-db/index.json` | Manifest (count, libraries, archetype accounting, content hash) |
| `scripts/components-db/generate.mjs` | Deterministic builder: archetypes × library token sets × variants |
| `scripts/components-db/lib/` | Token sets, node builders, the `ttArg` DSL resolver, the validator that mirrors Thingtime's renderer + server caps |
| `scripts/components-db/seed.mjs` | Seeds the catalog into any Thingtime deployment **via the real API only** |

Current catalog: **2800 components** across 8 library styles — Ant Design,
Bootstrap, MUI, shadcn/ui, Untitled UI, daisyUI, React Flow, and the Thingtime
house style.

## How Thingtime consumes this

Components live in Thingtime's MongoDB as system `component` things and the
frontend fetches them from there (`GET /api/v1/components/browse`). This repo
is the source catalog + pipeline, not a runtime dependency: seed it into a
deployment once (idempotent, converges), and the app never reads these files
directly.

```sh
# Validate the catalog (no writes)
node scripts/components-db/generate.mjs --check

# Regenerate after editing archetypes/tokens
node scripts/components-db/generate.mjs

# Seed into a Thingtime deployment (admin credentials via env or
# untracked scripts/components-db/.seed-env — placeholders below)
TT_SEED_BASE=http://127.0.0.1:9999 \
TT_SEED_ADMIN_USER=your-admin-user \
TT_SEED_ADMIN_PASS=your-admin-pass \
node scripts/components-db/seed.mjs
```

Seeding is admin-gated, batched, and idempotent: re-running converges
(`unchanged` for already-seeded slugs). `GET /api/v1/admin/components/seed`
returns the census (`{ totalSeeded }`).

## Contributing components

See `scripts/components-db/README.md` for the full pipeline contract. In short:

1. Add an archetype module under `scripts/components-db/lib/archetypes/`
   (follow `button.mjs`), append its id to `ARCHETYPE_ORDER` in
   `lib/catalog.mjs` (append-only — never reorder).
2. `node scripts/components-db/generate.mjs --check --archetype <id>` until
   clean — the validator mirrors the renderer's allowlist and the server's
   580-node cap, so what validates here renders there.
3. `node scripts/components-db/generate.mjs` and commit the source **and** the
   generated JSON together.

Keep archetypes genuinely varied — new UI patterns, not palette swaps.

## Provenance

Extracted from [lopugit/thingtime#291](https://github.com/lopugit/thingtime/pull/291)
so the app repo ships only the Thingtime runtime and the components Thingtime
itself needs, while the full catalog lives and grows here.
