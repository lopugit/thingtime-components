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

## Functional catalog, version 2

Every rendition includes editable values and a private-record Action. Controls
use native fields and isolated local state; choices, tab panels, pagination,
disclosures, dialogs, countdowns, notes, checklists, media playback and image
previews have working behavior. Saving uses `demo-catalog-records-save` and the
current component's edited values. Reset restores the component defaults.

Banking, payments, communication, devices and other external-service examples
save private drafts. They do not claim to send, purchase or operate anything.
Configure an owner-scoped integration Action and set `actionKey` / `actionLabel`
to enable external effects. The default Action accepts `family`, `title` and
`details`; an integration adapter can accept the same input contract. Credentials
belong in connection settings, never in component arguments. Password/key fields
and environment-value examples are excluded from saved metadata.

Deploy [Thingtime PR 870](https://github.com/lopugit/thingtime/pull/870) before
seeding version 2. The seeder checks the selected origin's capability manifest
and requires `api.webpages-suites-install >= 1.1.0`, `api.admin-components-seed
>= 1.0.0` and `api.login >= 1.0.0`, with matching major versions. It rejects
redirects and requires HTTPS outside loopback. Forks need their own admin account
and ordinary Thingtime database/session setup; no shared external API key is
needed for local controls or private records.

```sh
node --test scripts/components-db/*.test.mjs
node scripts/components-db/generate.mjs --check
# Cross-check using the real app sanitizer and resolver:
THINGTIME_SOURCE=/path/to/thingtime node \
  --import /path/to/thingtime/remix/node_modules/tsx/dist/loader.mjs \
  scripts/components-db/verify-thingtime.mjs
# Local browser fixture (exclude remix/.functional-preview/ in that checkout):
THINGTIME_SOURCE=/path/to/thingtime node scripts/components-db/create-preview.mjs
```

The fixture is served at `/.functional-preview/index.html` by the app's managed
Vite dev process. It can display one component or all 350 families for a selected
design. The acceptance checkout used http://localhost:19970 (HMR 19971, API 19972).
Tailscale Funnel could not be verified because the installed CLI points to a
missing application executable; no Funnel mapping was changed.

Acceptance on 2026-09-21: all 2,800 definitions passed the app's schema gate,
matched its resolver output and used supported native tags. Browser layout scans
covered all 350 families in all eight styles at phone width, with no horizontal
overflow after fixing fixed minimum widths and wrapping rows. Native dialog,
countdown, pagination, tab-state and select interactions were also checked.
