# Architecture

A Next.js 14 App Router application on React 18, deployed to Vercel.

## The stack

| Piece            | Used for                                                     |
| ---------------- | ------------------------------------------------------------ |
| Next.js 14       | App Router, in `src/app/` — layout, page, PWA manifest       |
| Tailwind CSS 3   | The styling, with SCSS modules where a keyframe is needed    |
| framer-motion    | The scroll parallax on the floating cards                    |
| Vercel Analytics | Traffic, mounted in the root layout alongside Speed Insights |

## Components

Atomic design, one folder per level under `src/components/`:

- `atoms/` — highlighted text, link button, status badge and dot pulse,
  the three heading levels.
- `organisms/` — the main container.
- `templates/` — the page-level compositions.

A route in `src/app/` renders a template and nothing else; `src/app/page.tsx`
is three lines around `HelloWorldTemplate`. Class names are merged through
`mergeClassName` in `src/lib/utils.ts`.
