# Graph Report - thingtime-components  (2026-09-21)

## Corpus Check
- 2878 files · ~2,826,346 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 861 nodes · 2564 edges · 65 communities (53 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1f6a66d8`
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
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
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
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Component Seed API|Component Seed API]]
- [[_COMMUNITY_Components Database|Components Database]]
- [[_COMMUNITY_Functional Catalog Version 2|Functional Catalog Version 2]]
- [[_COMMUNITY_Generator Validator Seeder Pipeline|Generator Validator Seeder Pipeline]]
- [[_COMMUNITY_Thingtime Runtime|Thingtime Runtime]]
- [[_COMMUNITY_Component Archetypes|Component Archetypes]]
- [[_COMMUNITY_Components DB Pipeline|Components DB Pipeline]]

## God Nodes (most connected - your core abstractions)
1. `el()` - 327 edges
2. `toneMap()` - 101 edges
3. `text()` - 95 edges
4. `row()` - 85 edges
5. `iff()` - 78 edges
6. `stringArg()` - 75 edges
7. `stack()` - 74 edges
8. `merge()` - 71 edges
9. `define()` - 71 edges
10. `toneArg()` - 65 edges

## Surprising Connections (you probably didn't know these)
- `globeIcon()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/accessibility.mjs → scripts/components-db/lib/helpers.mjs
- `kbdChip()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/accessibility.mjs → scripts/components-db/lib/helpers.mjs
- `ghostBtn()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/ai-assistant.mjs → scripts/components-db/lib/helpers.mjs
- `stateMap()` --calls--> `map()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/ai-assistant.mjs → scripts/components-db/lib/helpers.mjs
- `monoChip()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/automotive.mjs → scripts/components-db/lib/helpers.mjs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Component Catalog Generation Pipeline** — scripts_components_db_lib_tokens, scripts_components_db_lib_helpers, scripts_components_db_lib_archetypes, scripts_components_db_lib_catalog, scripts_components_db_lib_resolve, scripts_components_db_lib_validate, scripts_components_db_generate, components_db_index [EXTRACTED 0.95]
- **Component Catalog Publication Flow** — readme_component_catalog, readme_components_db, readme_generator_validator_seeder_pipeline, readme_component_seed_api, readme_thingtime_runtime [EXTRACTED 0.95]

## Communities (65 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (36): out, nodes(), resolved(), walk(), archetypeScope, checkOnly, dbRoot, flags (+28 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (33): ALERT_TONES, alertRadius(), archetype, baseAlert(), toneIcon(), sizeMap(), archetype, chevron() (+25 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (37): accentOf(), archetype, globeIcon(), kbdChip(), personIcon(), switchEl(), archetype, chromeOf() (+29 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (11): archetype, cm(), copyIcon(), diffLine(), keyChip(), kw(), shortcutRow(), spacer() (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.13
Nodes (22): accent(), archetype, bikeIcon(), buttonBase(), chipRadius(), ghostButton(), infoChip(), miniPill() (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (12): archetype, dotSizeMap, archetype, imagePlaceholder(), archetype, skeletonBar(), spinnerSvg(), archetype (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.24
Nodes (8): archetype, chatGlyph(), chipBase(), chipRadius(), faceSvg(), ghostButton(), MOUTHS, upper()

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (4): archetype, archetype, featureCheckRow(), textArg()

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (16): archetype, BAR_HEIGHT_MAP, BAR_HEIGHTS, BRIGHT_OPACITY, BRIGHT_STEPS, bulbIcon(), camIcon(), micIcon() (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.15
Nodes (15): accent(), archetype, bracketPair(), chip(), chipRadius(), ellipsis, formDot(), formDots() (+7 more)

### Community 10 - "Community 10"
Cohesion: 0.22
Nodes (13): archetype, badgeRadius(), baseBadge(), commonArgs(), archetype, commonArgs(), disabledStyle, archetype (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.14
Nodes (12): activityIcon(), archetype, bikeIcon(), card(), cardRadius(), EXERCISE_DASH, heading(), MOVE_DASH (+4 more)

### Community 12 - "Community 12"
Cohesion: 0.18
Nodes (15): accent(), archetype, argCheckbox(), checkboxBase(), checkboxOff(), copyIcon(), dividerStyle(), eyeIcon() (+7 more)

### Community 13 - "Community 13"
Cohesion: 0.16
Nodes (15): archetype, caption(), card(), cardRadius(), chip(), cloudGlyph(), forecastCol(), modeSegment() (+7 more)

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (13): archetype, artworkSquare(), eqBars(), filledSvg(), monoTime(), musicNote(), nextIcon(), pauseBars() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.19
Nodes (10): archetype, toneIcon(), archetype, arrowDown(), arrowUp(), functionalWidget(), arg(), div() (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.18
Nodes (12): archetype, copyIcon(), dotMeter(), ghostBtn(), meterDot(), micIcon(), paperclipIcon(), refreshIcon() (+4 more)

### Community 17 - "Community 17"
Cohesion: 0.36
Nodes (8): archetype, boxBase(), groupOption(), optionLabel(), radioOption(), kvRow(), bracketChip(), row()

### Community 18 - "Community 18"
Cohesion: 0.19
Nodes (11): archetype, boxGlyph(), chipRadius(), copyGlyph(), divider(), ghostBtn(), glyph(), monoChip() (+3 more)

### Community 19 - "Community 19"
Cohesion: 0.07
Nodes (31): archetype, bubbleBase(), bubbleRound(), composerSvg(), incomingBubble(), incomingRadius(), micIcon(), outgoingBubble() (+23 more)

### Community 20 - "Community 20"
Cohesion: 0.15
Nodes (8): archetype, cursorArrow(), cursorAt(), histBtn(), STICKY_FOLDS, STICKY_WASHES, strokeSvg(), colorArg()

### Community 21 - "Community 21"
Cohesion: 0.20
Nodes (10): accentOf(), archetype, bigNumber(), caption(), checkCircle(), ctaBase(), ghostButton(), heading() (+2 more)

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (12): archetype, assetRow(), bookHeader(), bookRow(), CANDLES, candleSvg(), caption(), coinCircle() (+4 more)

### Community 23 - "Community 23"
Cohesion: 0.21
Nodes (10): archetype, areaGlyph(), bathGlyph(), bedGlyph(), chipRadius(), ctaBase(), ghostCta(), glyph() (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.06
Nodes (36): archetype, buttonBase(), ghostButton(), monoChip(), toneButton(), solidFill(), toneFill(), archetype (+28 more)

### Community 25 - "Community 25"
Cohesion: 0.21
Nodes (11): accountRow(), archetype, caption(), cardDot(), contactless(), ghostButton(), iconTile(), moneyFont() (+3 more)

### Community 26 - "Community 26"
Cohesion: 0.24
Nodes (13): archetype, buttonReset, connector(), numberedDivider(), numberedStep(), pillTab(), segmentedTab(), STEP_DESCRIPTIONS (+5 more)

### Community 27 - "Community 27"
Cohesion: 0.22
Nodes (10): archetype, chevron(), cropIcon(), editorSvg(), glyphTile(), onSoftOf(), rotateIcon(), softOf() (+2 more)

### Community 28 - "Community 28"
Cohesion: 0.19
Nodes (10): accentOn(), accentSolid(), archetype, cardChrome(), cardShadow(), pinIcon(), slotChip(), slotRow() (+2 more)

### Community 29 - "Community 29"
Cohesion: 0.27
Nodes (8): REQUIRED_CAPABILITIES, semver(), verifyCapabilities(), dbRoot, loadSeedEnv(), repoRoot, run(), sleep()

### Community 30 - "Community 30"
Cohesion: 0.22
Nodes (6): archetype, connector(), entry(), perStage(), STAGES, STEP_LABEL_DEFAULTS

### Community 31 - "Community 31"
Cohesion: 0.22
Nodes (8): archetype, MEMBERS, PEOPLE, shell(), STATUS_ROWS, tableEl(), td(), th()

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (10): accent(), activityRow(), archetype, boardLane(), closeX(), muiCaps(), strong(), oddChip() (+2 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (7): archetype, caption(), card(), cardShadow(), chip(), chipRadius(), rainbowStrip()

### Community 35 - "Community 35"
Cohesion: 0.26
Nodes (10): archetype, comboOption(), fieldRadius(), groupHeader(), groupItem(), menuPanel(), openOption(), optionBase() (+2 more)

### Community 36 - "Community 36"
Cohesion: 0.29
Nodes (6): Contributing components, Functional catalog, version 2, How Thingtime consumes this, Provenance, thingtime-components 🧩🌈, What's inside

### Community 37 - "Community 37"
Cohesion: 0.20
Nodes (7): archetype, callout(), hairline(), headingInk(), kicker(), TOC_ITEMS, tocItem()

### Community 38 - "Community 38"
Cohesion: 0.22
Nodes (9): actionButton(), archetype, bookIcon(), card(), cardRadius(), cardShadow(), chip(), laurelIcon() (+1 more)

### Community 39 - "Community 39"
Cohesion: 0.25
Nodes (7): archetype, folderTile(), gridGlyph(), listGlyph(), quietShadow(), surfaceRadius(), svgFrame()

### Community 40 - "Community 40"
Cohesion: 0.22
Nodes (8): archetype, bodyText(), buttonBase(), cancelBtn(), closeBtn(), heading(), primaryBtn(), rainbowStrip()

### Community 41 - "Community 41"
Cohesion: 0.50
Nodes (4): segment(), dayCol(), toolTile(), merge()

### Community 42 - "Community 42"
Cohesion: 0.22
Nodes (8): archetype, chevronLeft(), frame(), frameShadow(), rainbowStrip(), skeletonLine(), trafficDot(), trafficLights()

### Community 43 - "Community 43"
Cohesion: 0.50
Nodes (3): components-db pipeline, Growth-loop runbook (10-minute cadence, target 6000), Layout

### Community 44 - "Community 44"
Cohesion: 0.25
Nodes (6): archetype, BOARD_ROWS, card(), cardShadow(), dayDot(), MEDALS

### Community 45 - "Community 45"
Cohesion: 0.28
Nodes (5): archetype, fieldBorder(), fieldShadow(), fieldStack(), inputChrome()

### Community 46 - "Community 46"
Cohesion: 0.28
Nodes (5): archetype, btnBase(), ghostBtn(), toneBtn(), videoIcon()

### Community 47 - "Community 47"
Cohesion: 0.28
Nodes (5): archetype, bookmarkGlyph(), buttonRadius(), chipRadius(), crispOr()

### Community 48 - "Community 48"
Cohesion: 0.28
Nodes (7): archetype, deltaPill(), dividerV(), kpiTile(), labelStyle(), TONES, valueStyle()

### Community 49 - "Community 49"
Cohesion: 0.22
Nodes (5): archetype, ghostBtn(), groupLabel(), playGlyph(), radioRow()

### Community 51 - "Community 51"
Cohesion: 0.32
Nodes (4): archetype, chipRadius(), ghostButton(), upper()

### Community 53 - "Community 53"
Cohesion: 0.33
Nodes (3): archetype, dividerIf(), separator()

### Community 55 - "Community 55"
Cohesion: 0.12
Nodes (14): archetype, chevronLeft(), currentCrumb(), separator(), archetype, baseChip(), chipRadius(), softLook() (+6 more)

### Community 57 - "Community 57"
Cohesion: 0.60
Nodes (4): archetype, emptyGlyph(), layeredGlyphs(), times()

## Knowledge Gaps
- **149 isolated node(s):** `out`, `repoRoot`, `dbRoot`, `flags`, `archetypeScope` (+144 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `Community 3` to `Community 0`, `Community 1`, `Community 2`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 11`, `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 37`, `Community 38`, `Community 39`, `Community 40`, `Community 41`, `Community 42`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 53`, `Community 54`, `Community 55`, `Community 57`?**
  _High betweenness centrality (0.463) - this node is a cross-community bridge._
- **Why does `iff()` connect `Community 2` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 27`, `Community 28`, `Community 31`, `Community 34`, `Community 35`, `Community 37`, `Community 38`, `Community 39`, `Community 42`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 53`, `Community 54`, `Community 55`, `Community 57`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `toneMap()` connect `Community 24` to `Community 1`, `Community 2`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 37`, `Community 38`, `Community 39`, `Community 40`, `Community 41`, `Community 42`, `Community 44`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `Community 53`, `Community 54`, `Community 55`, `Community 57`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `out`, `repoRoot`, `dbRoot` to the rest of the system?**
  _149 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07428571428571429 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05353535353535353 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06560283687943262 - nodes in this community are weakly interconnected._