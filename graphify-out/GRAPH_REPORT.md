# Graph Report - .  (2026-09-21)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 843 nodes · 2517 edges · 56 communities (50 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f9173bbf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_window-chrome.mjs|window-chrome.mjs]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_support-help.mjs|support-help.mjs]]
- [[_COMMUNITY_merge|merge]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]

## God Nodes (most connected - your core abstractions)
1. `el()` - 323 edges
2. `toneMap()` - 101 edges
3. `text()` - 95 edges
4. `row()` - 85 edges
5. `iff()` - 75 edges
6. `stringArg()` - 75 edges
7. `stack()` - 74 edges
8. `merge()` - 71 edges
9. `define()` - 71 edges
10. `toneArg()` - 65 edges

## Surprising Connections (you probably didn't know these)
- `Thingtime Component Catalog` --references--> `Component Catalog Manifest`  [EXTRACTED]
  README.md → components-db/index.json
- `Thingtime Component Catalog` --references--> `Catalog Exporter`  [EXTRACTED]
  README.md → scripts/components-db/export.mjs
- `Thingtime Component Catalog` --references--> `Catalog Generator`  [EXTRACTED]
  README.md → scripts/components-db/generate.mjs
- `Thingtime Component Catalog` --references--> `Catalog Validator`  [EXTRACTED]
  README.md → scripts/components-db/lib/validator.mjs
- `Thingtime Component Catalog` --references--> `Catalog Seeder`  [EXTRACTED]
  README.md → scripts/components-db/seed.mjs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Component Catalog Build and Publication Pipeline** — readme_component_catalog, scripts_components_db_generate_generator, scripts_components_db_lib_validator_validator, scripts_components_db_seed_seeder [EXTRACTED 0.95]
- **Component Catalog Generation Pipeline** — scripts_components_db_lib_tokens, scripts_components_db_lib_helpers, scripts_components_db_lib_archetypes, scripts_components_db_lib_catalog, scripts_components_db_lib_resolve, scripts_components_db_lib_validate, scripts_components_db_generate, components_db_index [EXTRACTED 0.95]

## Communities (56 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (43): archetype, boxBase(), groupOption(), optionLabel(), radioOption(), archetype, fieldBorder(), fieldShadow() (+35 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (34): accountRow(), archetype, caption(), cardDot(), contactless(), ghostButton(), iconTile(), moneyFont() (+26 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (29): out, nodes(), walk(), ARCHETYPE_ORDER, archetypesDir, buildCatalog(), loadArchetypes(), cosmetic (+21 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (34): archetype, chromeOf(), handleDot(), miniNode(), nodeShell(), selectedRing(), TONES, typeChip() (+26 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (28): archetype, callout(), hairline(), headingInk(), kicker(), TOC_ITEMS, tocItem(), archetype (+20 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (22): accent(), archetype, bikeIcon(), buttonBase(), chipRadius(), ghostButton(), infoChip(), miniPill() (+14 more)

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (19): archetype, bubbleBase(), bubbleRound(), composerSvg(), incomingBubble(), incomingRadius(), micIcon(), outgoingBubble() (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (16): archetype, BAR_HEIGHT_MAP, BAR_HEIGHTS, BRIGHT_OPACITY, BRIGHT_STEPS, bulbIcon(), camIcon(), micIcon() (+8 more)

### Community 8 - "Community 8"
Cohesion: 0.19
Nodes (17): accent(), accentText(), archetype, checkboxMock(), chevronLeft(), fieldBox(), fieldLabel(), fieldMock() (+9 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (16): archetype, auditLine(), auditTile(), auditTime(), cardShadow(), cardStyle(), ghostBtn(), permGlyph() (+8 more)

### Community 10 - "Community 10"
Cohesion: 0.13
Nodes (9): archetype, dotSizeMap, archetype, archetype, archetype, skeletonBar(), spinnerSvg(), numberArg() (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.17
Nodes (14): chevronLeft(), separator(), archetype, cm(), copyIcon(), diffLine(), keyChip(), kw() (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.14
Nodes (12): activityIcon(), archetype, bikeIcon(), card(), cardRadius(), EXERCISE_DASH, heading(), MOVE_DASH (+4 more)

### Community 13 - "Community 13"
Cohesion: 0.22
Nodes (13): archetype, badgeRadius(), baseBadge(), commonArgs(), archetype, commonArgs(), disabledStyle, stepArgs() (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (13): archetype, artworkSquare(), eqBars(), filledSvg(), monoTime(), musicNote(), nextIcon(), pauseBars() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (12): archetype, copyIcon(), dotMeter(), ghostBtn(), meterDot(), micIcon(), paperclipIcon(), refreshIcon() (+4 more)

### Community 16 - "Community 16"
Cohesion: 0.17
Nodes (14): archetype, caption(), card(), cardRadius(), cloudGlyph(), forecastCol(), modeSegment(), pin() (+6 more)

### Community 17 - "Community 17"
Cohesion: 0.16
Nodes (9): archetype, archetype, barHeight(), barStyle(), mutedIcon(), archetype, dot(), define() (+1 more)

### Community 18 - "Community 18"
Cohesion: 0.22
Nodes (14): segment(), archetype, buttonReset, connector(), numberedDivider(), numberedStep(), pillTab(), segmentedTab() (+6 more)

### Community 19 - "Community 19"
Cohesion: 0.19
Nodes (11): archetype, boxGlyph(), chipRadius(), copyGlyph(), divider(), ghostBtn(), glyph(), monoChip() (+3 more)

### Community 20 - "Community 20"
Cohesion: 0.19
Nodes (9): archetype, bookmarkGlyph(), cameraGlyph(), commentGlyph(), globeGlyph(), glyph(), linkGlyph(), sendGlyph() (+1 more)

### Community 21 - "Community 21"
Cohesion: 0.14
Nodes (9): archetype, cursorArrow(), cursorAt(), histBtn(), STICKY_FOLDS, STICKY_WASHES, strokeSvg(), toolTile() (+1 more)

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (12): archetype, assetRow(), bookHeader(), bookRow(), CANDLES, candleSvg(), caption(), coinCircle() (+4 more)

### Community 23 - "Community 23"
Cohesion: 0.23
Nodes (9): rainbowStrip(), archetype, archetype, arrowDown(), arrowUp(), div(), span(), svgBase() (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.18
Nodes (11): accentOn(), accentSolid(), archetype, cardChrome(), cardShadow(), dayCol(), pinIcon(), slotChip() (+3 more)

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (11): archetype, BAR_HEIGHTS, card(), chartHeader(), DONUT_DASH, DONUT_STEPS, HEAT_OPACITY, HEAT_PATTERN (+3 more)

### Community 26 - "Community 26"
Cohesion: 0.18
Nodes (10): archetype, card(), cardRadius(), cardShadow(), churnSquare(), copyIcon(), monoChip(), PIPELINE_STAGES (+2 more)

### Community 27 - "Community 27"
Cohesion: 0.22
Nodes (10): archetype, chevron(), cropIcon(), editorSvg(), glyphTile(), onSoftOf(), rotateIcon(), softOf() (+2 more)

### Community 28 - "Community 28"
Cohesion: 0.20
Nodes (6): accentOf(), archetype, globeIcon(), kbdChip(), personIcon(), switchEl()

### Community 29 - "Community 29"
Cohesion: 0.18
Nodes (9): archetype, baseChip(), chipRadius(), softLook(), solidLook(), archetype, bareInput(), kbdChip() (+1 more)

### Community 30 - "Community 30"
Cohesion: 0.20
Nodes (7): archetype, caption(), card(), cardShadow(), chip(), chipRadius(), rainbowStrip()

### Community 31 - "Community 31"
Cohesion: 0.22
Nodes (9): ALERT_TONES, alertRadius(), archetype, baseAlert(), toneIcon(), sizeMap(), sizeMap(), toneIcon() (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.22
Nodes (5): archetype, buttonBase(), ghostButton(), monoChip(), toneButton()

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (9): actionButton(), archetype, bookIcon(), card(), cardRadius(), cardShadow(), chip(), laurelIcon() (+1 more)

### Community 34 - "Community 34"
Cohesion: 0.25
Nodes (7): archetype, folderTile(), gridGlyph(), listGlyph(), quietShadow(), surfaceRadius(), svgFrame()

### Community 35 - "Community 35"
Cohesion: 0.22
Nodes (9): archetype, barFill(), barTrack(), fillBackground(), RING_STEPS, ringDashValues, sliderThumb(), sliderTrack() (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.24
Nodes (7): archetype, bodyText(), buttonBase(), cancelBtn(), closeBtn(), heading(), primaryBtn()

### Community 37 - "window-chrome.mjs"
Cohesion: 0.22
Nodes (6): archetype, connector(), entry(), perStage(), STAGES, STEP_LABEL_DEFAULTS

### Community 38 - "Community 38"
Cohesion: 0.25
Nodes (9): Component Catalog Manifest, Admin Component Seed Endpoint, Thingtime Component Catalog, Components Browse Endpoint, Thingtime Runtime, Catalog Exporter, Catalog Generator, Catalog Validator (+1 more)

### Community 39 - "Community 39"
Cohesion: 0.28
Nodes (9): solidFill(), toneFill(), currentCrumb(), toneSoft(), toneWash(), chip(), brandGroup(), brandMark() (+1 more)

### Community 40 - "Community 40"
Cohesion: 0.25
Nodes (5): archetype, chevron(), navButton(), PRESETS, TIMES

### Community 41 - "support-help.mjs"
Cohesion: 0.25
Nodes (6): archetype, BOARD_ROWS, card(), cardShadow(), dayDot(), MEDALS

### Community 42 - "merge"
Cohesion: 0.28
Nodes (5): archetype, btnBase(), ghostBtn(), toneBtn(), videoIcon()

### Community 43 - "Community 43"
Cohesion: 0.28
Nodes (5): archetype, bookmarkGlyph(), buttonRadius(), chipRadius(), crispOr()

### Community 44 - "Community 44"
Cohesion: 0.22
Nodes (8): archetype, MEMBERS, PEOPLE, shell(), STATUS_ROWS, tableEl(), td(), th()

### Community 45 - "Community 45"
Cohesion: 0.25
Nodes (6): archetype, chevronLeft(), frame(), frameShadow(), rainbowStrip(), skeletonLine()

### Community 46 - "Community 46"
Cohesion: 0.32
Nodes (4): archetype, chipRadius(), ghostButton(), upper()

### Community 48 - "Community 48"
Cohesion: 0.33
Nodes (3): archetype, dividerIf(), separator()

### Community 50 - "Community 50"
Cohesion: 0.53
Nodes (3): REQUIRED_CAPABILITIES, semver(), verifyCapabilities()

### Community 53 - "Community 53"
Cohesion: 0.50
Nodes (3): Growth-loop runbook (10-minute cadence, target 6000), Layout, Components DB Pipeline

## Knowledge Gaps
- **135 isolated node(s):** `out`, `archetype`, `archetype`, `ALERT_TONES`, `archetype` (+130 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `Community 11` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 36`, `window-chrome.mjs`, `Community 39`, `Community 40`, `support-help.mjs`, `merge`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 52`?**
  _High betweenness centrality (0.416) - this node is a cross-community bridge._
- **Why does `toneMap()` connect `Community 39` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 6`, `Community 7`, `Community 9`, `Community 10`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 27`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 36`, `window-chrome.mjs`, `support-help.mjs`, `merge`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 52`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `text()` connect `Community 1` to `Community 0`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 8`, `Community 9`, `Community 10`, `Community 11`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 19`, `Community 20`, `Community 22`, `Community 23`, `Community 24`, `Community 26`, `Community 27`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `window-chrome.mjs`, `Community 40`, `support-help.mjs`, `merge`, `Community 43`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 52`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **What connects `out`, `archetype`, `archetype` to the rest of the system?**
  _135 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05925925925925926 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06565656565656566 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07188160676532769 - nodes in this community are weakly interconnected._