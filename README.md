# Lumen — an Apple-grade glass capsule skin for Video.js v10

**Lumen** asks how little a player can show and still feel complete. Every control
lives in a single floating glass capsule — refractive, rim-lit, and quiet — with the
seek bar folded into the capsule itself and **no accent colour at all**: the played
fill is pure white, the text is white at 92%, and the only "highlight" is light
bending through glass. It is painted onto the standard v10 components, so every
control, menu, hotkey and announcement keeps working exactly as the framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux) — one of six design
directions explored for this challenge.
Design file: [Video.js v10 Skins (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi) — page **“Variation 4 — Lumen”**.

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video — a 90-second clip from *Big Buck Bunny*
(Blender Foundation), hosted on Mux — no placeholder media. Change the preview
media in `apps/preview/src/frame/player`.

## The design system

- **One capsule, everything inside it** — width 92% of the player, capped at 960px,
  floating 24px above the bottom edge, 20px radius, 24px horizontal padding. The
  seek row sits in-flow above the transport row, so the capsule never changes size
  between states and nothing ever jumps.
- **Refractive glass** — `rgba(28, 28, 30, 0.62)` over
  `blur(28px) saturate(190%) brightness(0.95)`, lit by a specular rim
  (`inset 0 1px 0 rgba(255,255,255,0.22)`, fading to 0.06 at the bottom edge) and a
  soft `0 16px 40px rgba(0,0,0,0.45)` shadow. One material is reused for the title
  chip, the top buttons, the centre play disc, menus, popovers and tooltips.
- **The seek bar is a light line** — a 4px pill track (white 18%, buffered 32%)
  whose played fill is pure `#FFFFFF`. It swells to 8px on hover/focus with an
  180ms `cubic-bezier(0.22, 1, 0.36, 1)` ease. There is **no thumb at rest**; a
  14px pill thumb fades in only while you hover, scrub or tab to it.
- **Buttons** — 44×44px hit areas with 20px filled, rounded-join glyphs; the hover
  state is a 36px circular pill (white 14%) drawn *inside* the hit area, so hands
  get 44px while eyes see 36px. Pressing dips to 97% scale.
- **Type** — Inter (standing in for SF Pro), 12–13px at weight 500, tabular figures,
  −0.01em tracking; time never jitters.
- **Icons** — a filled glyph set with rounded joins drawn on a 24×24 grid,
  in `src/video/icons.ts`.

## Signature moments

- **The calm centre** — the big play affordance is the same glass as the capsule:
  a quiet 72px disc, no colour, no pulse. While playing it becomes a restart
  medallion; buffering swaps in a monochrome light-arc spinner.
- **Focus keeps the lights on** — tabbing into the capsule pins the whole chrome
  visible; the auto-hide fade (≈250ms) never strands a keyboard user.
- **Menus are glass too** — settings, captions, volume popover and tooltips share
  the capsule's material and 18px radius; the open menu morphs its height
  (`interpolate-size`) instead of popping.
- **Light scheme** — the capsule turns to pale glass (white 72%, ink text, dark
  seek fill) by flipping one token set; the skin syncs to the host page's
  `color-scheme` automatically.
- **Captions** render as a small dark chip in both schemes, so subtitles stay
  legible over bright footage.

## Accessibility

- Touch targets ≥ 44px everywhere; the 2.5px focus outline is never removed, and
  the capsule stays on screen while anything inside it has keyboard focus.
- `prefers-reduced-transparency` and `prefers-contrast: more` swap the glass for a
  near-solid fill and drop the backdrop filter entirely.
- **Forced-colors** fallbacks: seek fill and thumb become solid Highlight, the
  buffered run hatches, glass shadows and blur are removed.
- `prefers-reduced-motion` disables the seek swell, fades and press transforms.
- Scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status announcer and error
  dialog are all kept; tab order matches visual order because layout follows
  source order. The error dialog is the same glass, over a dimmed scrim.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the Lumen icon set + colour-scheme sync
src/video/skin.css    – the Lumen layer: tokens, capsule, states, responsive & a11y blocks
src/video/icons.ts    – the filled rounded-join glyph set (24×24 grid)
src/skin.css          – font imports (Inter)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is forked,
which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed first in Figma (tokens, desktop and mobile players), then implemented
with an AI coding agent against the version-matched Video.js v10.3.0 docs:
scaffold project, custom icon set, CSS layer — followed by checks at desktop and
mobile widths, in both colour schemes, with keyboard-only navigation, a settings
menu open, reduced motion, and the geometry measured against the spec (capsule
width ratio, bottom offset, radius, track height, target sizes).

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed & built by **Haseeb P.** — CEO, [The Hitek Agency](https://www.thehitekagency.com) (Houston, USA).
