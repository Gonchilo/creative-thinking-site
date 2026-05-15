# CLAUDE.md — Creative Thinking Website

## What this is

Static HTML/CSS/JS site for Creative Thinking studio. No build pipeline. Edit files directly.

## Key facts

- **Owners:** Gonçalo (web dev) & Joana (marketing) — couple, founded 2025, based in Lisbon
- **Email:** joana@creativethinking.pt
- **WhatsApp:** +351 913 306 609 (`wa.me/351913306609`)
- **Instagram only** — LinkedIn, Behance, Dribbble removed by owner request
- **Footer nav:** Sobre, FAQ, Contacto (no Blog)

## Shared files

`site/styles.css` — all shared styles. Every page links this. Add new shared components here.
`site/script.js` — nav scroll, mobile burger, reveal-on-scroll. Minimal, no dependencies.

## Design rules

- Font: Syne everywhere; Caveat only for handwritten elements (captions, signatures)
- All text `text-transform: uppercase` via body — override with `text-transform: none` where needed
- Borders: `3px solid var(--red)` on cards; `2px solid var(--red)` on smaller elements
- Shadows: offset `X Y 0 var(--red)` — flat, no blur. Cards: `6px 6px`. Buttons: `4px 4px`
- Hover: `translate(-2px, -2px)` + increase shadow offset
- Stickers: `.sticker` class, `rotate(-3deg)` default; vary per-child for groups
- No LinkedIn, no Behance, no Dribbble, no Blog anywhere in the site

## Page-specific notes

### sobre.html
- Polaroid photo: `goncalo-joana.png` — do not replace with base64
- Stickers: "Olá, somos o Gonçalo & a Joana 👋" (top-left) and "Desde 2025" (bottom-right)
- Signature block: G avatar gold, J avatar blue

### contacto.html
- Order: Email card → WhatsApp card → quote form → Instagram pill
- No LinkedIn card

## Do not

- Inline CSS or JS into HTML pages (use external files)
- Add base64-encoded images (reference file paths)
- Add LinkedIn, Behance, Dribbble, or Blog links
- Change "Desde 2025" to any other year
