# Social Posts Templates (Penpot Plugin)

Create social media boards in Penpot with a single click. Pick a platform, select a template, and the plugin adds a board with the correct dimensions to your canvas.

## Quick Install

- Manifest URL (Netlify): `https://<site-name>.netlify.app/manifest.json`
- Penpot → Plugins → Add plugin from URL → paste the manifest URL and confirm.
## Features

- Platform filter with a sticky selector that stays visible while scrolling
- Ready‑made sizes for Instagram, Facebook, Twitter/X, LinkedIn, YouTube, TikTok, Pinterest, Twitch, Snapchat
- One‑click board creation using Penpot’s plugin API
- Clean dark UI built with React + TypeScript

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Build

```bash
npm run build
```

This generates a `dist/` folder containing `manifest.json`, `plugin.js`, and assets. The Vite build copies everything from `public/` into `dist/`.

### Install in Penpot

Option A — Netlify (Önerilen):

1. Netlify’de repo’yu bağlayın.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. CORS: `public/_headers` dosyası Netlify tarafından uygulanır.
5. Penpot → Plugins → Add plugin from URL → Manifest URL:

   `https://<site-name>.netlify.app/manifest.json`

Option B — GitHub Pages:

1. Penpot → Plugins → Add plugin from URL
2. Manifest URL:

   `https://thebestgoodguy.github.io/social-poster-templates-penpot-plugin/manifest.json`

3. Onaylayın ve eklentiyi açın.

Not: Fork veya yeniden adlandırma yaparsanız, kullanıcı adı ve repo adını URL’de güncelleyin.

Option C — User Site (Kök Yol):

Bazı istemciler, manifest içindeki yolları host köküne bağladığından `.../plugin.js` ve `.../icon.png` dosyaları host kökünde beklenir. Bunu sağlamak için kullanıcı sitesi kullanın:

1. GitHub’da `thebestgoodguy/thebestgoodguy.github.io` reposunu oluşturun ve Pages’ı aktif edin.
2. Bu repoya yayınlamak için bu depoda `USER_SITE_PAT` isimli bir PAT secret tanımlayın (repo write yetkili).
3. Actions → “Publish to User Site Root” iş akışını çalıştırın veya `main`’e push yapın.
4. Penpot’a eklerken manifest URL olarak şunu kullanın:

   `https://thebestgoodguy.github.io/manifest.json`

Bu yöntemle `https://thebestgoodguy.github.io/plugin.js` ve `https://thebestgoodguy.github.io/icon.png` kökte bulunur ve istemci yanlış birleştirse bile dosyalar yüklenir.

## Usage

- Open “Social Posts Templates”.
- Use the platform selector to filter templates.
- Click a template card to create a board sized for that platform.

## Configuration

- Templates: edit `src/data/templates.ts` to add or tweak sizes.
- UI panel width: adjust `width` in `src/plugin.ts:11`.
- Styles: update `src/App.css` for layout and theme.

## Scripts

- `npm run lint` — run ESLint
- `npm run watch` — continuous build (writes to `dist/`)
- `npm run preview` — serve the built app (used to host `dist/` during development)

## Tech Stack

- React 19 + TypeScript
- Vite 7
- `@penpot/plugin-types`, `@penpot/plugin-styles`
- `lucide-react` for icons

## Project Structure

- `src/App.tsx` — UI and interactions
- `src/App.css` — styles
- `src/data/templates.ts` — template definitions
- `src/plugin.ts` — Penpot plugin entry (opens UI and handles messages)
- `public/manifest.json` — plugin manifest used by Penpot
- `vite.config.ts` — build configuration (outputs `plugin.js` and `index.html`)

## Permissions

The plugin requests `content:read` and `content:write` (see `public/manifest.json`).

## License

MIT License — see `LICENSE` for full text.

You can use, modify, and distribute the plugin with attribution. The software is provided without warranty.
