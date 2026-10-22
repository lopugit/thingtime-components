# Graph Report - thingtime-components  (2026-09-21)

## Corpus Check
- 2879 files · ~2,827,137 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 864 nodes · 2566 edges · 67 communities (55 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ef7db971`
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
- [[_COMMUNITY_stat-metric.mjs|stat-metric.mjs]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_merge|merge]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_search-command.mjs|search-command.mjs]]
- [[_COMMUNITY_Admin Component Seed Endpoint|Admin Component Seed Endpoint]]
- [[_COMMUNITY_Thingtime Component Catalog|Thingtime Component Catalog]]
- [[_COMMUNITY_Components Browse Endpoint|Components Browse Endpoint]]
- [[_COMMUNITY_Thingtime Runtime|Thingtime Runtime]]
- [[_COMMUNITY_Component Archetypes|Component Archetypes]]
- [[_COMMUNITY_Components DB Pipeline|Components DB Pipeline]]
- [[_COMMUNITY_Components DB Pipeline|Components DB Pipeline]]
- [[_COMMUNITY_Catalog Seeder|Catalog Seeder]]

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
- `functionalDefinition()` --calls--> `walk()`  [INFERRED]
  scripts/components-db/lib/functionality.mjs → scripts/components-db/functionality.test.mjs
- `globeIcon()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/accessibility.mjs → scripts/components-db/lib/helpers.mjs
- `kbdChip()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/accessibility.mjs → scripts/components-db/lib/helpers.mjs
- `ghostBtn()` --calls--> `el()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/ai-assistant.mjs → scripts/components-db/lib/helpers.mjs
- `stateMap()` --calls--> `map()`  [EXTRACTED]
  scripts/components-db/lib/archetypes/ai-assistant.mjs → scripts/components-db/lib/helpers.mjs

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Component Catalog Build and Publication Pipeline** — readme_component_catalog, scripts_components_db_generate_generator, scripts_components_db_lib_validator_validator, scripts_components_db_seed_seeder [EXTRACTED 0.95]
- **Component Catalog Generation Pipeline** — scripts_components_db_lib_tokens, scripts_components_db_lib_helpers, scripts_components_db_lib_archetypes, scripts_components_db_lib_catalog, scripts_components_db_lib_resolve, scripts_components_db_lib_validate, scripts_components_db_generate, components_db_index [EXTRACTED 0.95]

## Communities (67 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (33): archetype, assetRow(), bookHeader(), bookRow(), CANDLES, candleSvg(), caption(), coinCircle() (+25 more)

### Community 1 - "Community 1"
Cohesion: 0.21
Nodes (11): accountRow(), archetype, caption(), cardDot(), contactless(), ghostButton(), iconTile(), moneyFont() (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (30): out, nodes(), resolved(), walk(), archetypeScope, checkOnly, dbRoot, flags (+22 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (40): archetype, chromeOf(), handleDot(), miniNode(), nodeShell(), selectedRing(), TONES, typeChip() (+32 more)

### Community 4 - "Community 4"
Cohesion: 0.21
Nodes (10): archetype, areaGlyph(), bathGlyph(), bedGlyph(), chipRadius(), ctaBase(), ghostCta(), glyph() (+2 more)

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (22): accent(), archetype, bikeIcon(), buttonBase(), chipRadius(), ghostButton(), infoChip(), miniPill() (+14 more)

### Community 6 - "Community 6"
Cohesion: 0.26
Nodes (11): archetype, bubbleBase(), bubbleRound(), composerSvg(), incomingBubble(), incomingRadius(), micIcon(), outgoingBubble() (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (16): archetype, BAR_HEIGHT_MAP, BAR_HEIGHTS, BRIGHT_OPACITY, BRIGHT_STEPS, bulbIcon(), camIcon(), micIcon() (+8 more)

### Community 8 - "Community 8"
Cohesion: 0.22
Nodes (7): kvRow(), archetype, ghostBtn(), groupLabel(), playGlyph(), radioRow(), text()

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (28): ALERT_TONES, alertRadius(), archetype, baseAlert(), toneIcon(), sizeMap(), archetype, disabledStyle() (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.05
Nodes (29): archetype, dotSizeMap, archetype, imagePlaceholder(), accent(), archetype, caretBar(), focusable() (+21 more)

### Community 11 - "Community 11"
Cohesion: 0.22
Nodes (11): archetype, cm(), copyIcon(), diffLine(), keyChip(), kw(), shortcutRow(), spacer() (+3 more)

### Community 12 - "Community 12"
Cohesion: 0.14
Nodes (12): activityIcon(), archetype, bikeIcon(), card(), cardRadius(), EXERCISE_DASH, heading(), MOVE_DASH (+4 more)

### Community 13 - "Community 13"
Cohesion: 0.26
Nodes (13): archetype, badgeRadius(), baseBadge(), commonArgs(), archetype, buttonReset, numberedDivider(), STEP_DESCRIPTIONS (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (13): archetype, artworkSquare(), eqBars(), filledSvg(), monoTime(), musicNote(), nextIcon(), pauseBars() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (12): archetype, copyIcon(), dotMeter(), ghostBtn(), meterDot(), micIcon(), paperclipIcon(), refreshIcon() (+4 more)

### Community 16 - "Community 16"
Cohesion: 0.16
Nodes (15): archetype, caption(), card(), cardRadius(), chip(), cloudGlyph(), forecastCol(), modeSegment() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.33
Nodes (4): archetype, chevronLeft(), currentCrumb(), separator()

### Community 18 - "Community 18"
Cohesion: 0.47
Nodes (6): dayCol(), pillTab(), segmentedTab(), tabType(), underlineTab(), ifEq()

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
Cohesion: 0.18
Nodes (9): accentOf(), archetype, bigNumber(), caption(), checkCircle(), ctaBase(), ghostButton(), heading() (+1 more)

### Community 23 - "Community 23"
Cohesion: 0.07
Nodes (27): archetype, bodyText(), buttonBase(), cancelBtn(), closeBtn(), heading(), primaryBtn(), rainbowStrip() (+19 more)

### Community 24 - "Community 24"
Cohesion: 0.19
Nodes (10): accentOn(), accentSolid(), archetype, cardChrome(), cardShadow(), pinIcon(), slotChip(), slotRow() (+2 more)

### Community 25 - "Community 25"
Cohesion: 0.13
Nodes (13): archetype, BAR_HEIGHTS, card(), chartHeader(), DONUT_DASH, DONUT_STEPS, HEAT_OPACITY, HEAT_PATTERN (+5 more)

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
Cohesion: 0.40
Nodes (5): archetype, baseChip(), chipRadius(), softLook(), solidLook()

### Community 30 - "Community 30"
Cohesion: 0.20
Nodes (7): archetype, caption(), card(), cardShadow(), chip(), chipRadius(), rainbowStrip()

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (7): archetype, commonArgs(), disabledStyle, archetype, skeletonBar(), spinnerSvg(), booleanArg()

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
Nodes (11): accent(), activityRow(), archetype, boardLane(), closeX(), muiCaps(), strong(), oddChip() (+3 more)

### Community 37 - "window-chrome.mjs"
Cohesion: 0.22
Nodes (6): archetype, connector(), entry(), perStage(), STAGES, STEP_LABEL_DEFAULTS

### Community 39 - "Community 39"
Cohesion: 0.26
Nodes (10): archetype, comboOption(), fieldRadius(), groupHeader(), groupItem(), menuPanel(), openOption(), optionBase() (+2 more)

### Community 40 - "Community 40"
Cohesion: 0.25
Nodes (5): archetype, chevron(), navButton(), PRESETS, TIMES

### Community 41 - "support-help.mjs"
Cohesion: 0.20
Nodes (7): archetype, callout(), hairline(), headingInk(), kicker(), TOC_ITEMS, tocItem()

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
Cohesion: 0.24
Nodes (8): archetype, chatGlyph(), chipBase(), chipRadius(), faceSvg(), ghostButton(), MOUTHS, upper()

### Community 46 - "Community 46"
Cohesion: 0.32
Nodes (4): archetype, chipRadius(), ghostButton(), upper()

### Community 48 - "Community 48"
Cohesion: 0.28
Nodes (5): archetype, fieldBorder(), fieldShadow(), fieldStack(), inputChrome()

### Community 49 - "Community 49"
Cohesion: 0.14
Nodes (15): solidFill(), toneFill(), archetype, barHeight(), barStyle(), brandGroup(), brandMark(), mutedIcon() (+7 more)

### Community 50 - "Community 50"
Cohesion: 0.27
Nodes (8): REQUIRED_CAPABILITIES, semver(), verifyCapabilities(), dbRoot, loadSeedEnv(), repoRoot, run(), sleep()

### Community 51 - "Community 51"
Cohesion: 0.15
Nodes (6): archetype, archetype, archetype, featureCheckRow(), define(), icons

### Community 52 - "stat-metric.mjs"
Cohesion: 0.28
Nodes (7): archetype, deltaPill(), dividerV(), kpiTile(), labelStyle(), TONES, valueStyle()

### Community 53 - "Community 53"
Cohesion: 0.50
Nodes (3): components-db pipeline, Growth-loop runbook (10-minute cadence, target 6000), Layout

### Community 56 - "merge"
Cohesion: 0.46
Nodes (7): archetype, boxBase(), groupOption(), optionLabel(), radioOption(), segment(), merge()

### Community 57 - "Community 57"
Cohesion: 0.29
Nodes (6): Contributing components, Functional catalog, version 2, How Thingtime consumes this, Provenance, thingtime-components 🧩🌈, What's inside

### Community 58 - "search-command.mjs"
Cohesion: 0.40
Nodes (3): archetype, bareInput(), kbdChip()

## Knowledge Gaps
- **151 isolated node(s):** `out`, `root`, `components`, `repoRoot`, `dbRoot` (+146 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `Community 11` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 12`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 36`, `window-chrome.mjs`, `Community 39`, `Community 40`, `support-help.mjs`, `merge`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 51`, `stat-metric.mjs`, `merge`, `search-command.mjs`?**
  _High betweenness centrality (0.460) - this node is a cross-community bridge._
- **Why does `iff()` connect `Community 3` to `Community 0`, `Community 1`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 11`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 19`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 39`, `Community 40`, `support-help.mjs`, `merge`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 48`, `Community 49`, `Community 51`, `stat-metric.mjs`, `merge`, `search-command.mjs`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `toneMap()` connect `Community 49` to `Community 0`, `Community 1`, `Community 3`, `Community 4`, `Community 6`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 27`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 34`, `Community 35`, `Community 36`, `window-chrome.mjs`, `Community 39`, `support-help.mjs`, `merge`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 51`, `stat-metric.mjs`, `merge`, `search-command.mjs`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **What connects `out`, `root`, `components` to the rest of the system?**
  _151 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08205128205128205 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09487179487179487 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.07536231884057971 - nodes in this community are weakly interconnected._