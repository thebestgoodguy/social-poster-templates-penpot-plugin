# Social Posts Templates (Penpot Plugin)

Create social media boards in Penpot with a single click. Pick a platform, select a template, and the plugin adds a board with the correct dimensions to your canvas.

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

1. Host the `dist/` directory with any static server (local or remote).
2. In Penpot, go to Plugins → Add plugin from URL.
3. Enter the URL to `manifest.json` (for example: `https://your-host/manifest.json`).
4. Open the plugin in your Penpot document.

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

Add your preferred license here.
