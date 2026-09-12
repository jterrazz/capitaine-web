# Developing

Use npm with Node 24 and the committed lockfile.

| Command       | Purpose                                               |
| ------------- | ----------------------------------------------------- |
| `npm ci`      | Install the locked dependencies                       |
| `npm run dev` | Open the Astro development server on port 4321        |
| `make fix`    | Apply the ecosystem formatter and the Astro formatter |
| `make check`  | Run quality checks, tests and static build            |

Astro's strict TypeScript configuration covers its templates; `astro check`
checks those templates in addition to the ecosystem TypeScript checks. There is
no Astro preset in the shared lint package, so the Node and testing presets are
composed locally. Prettier with its Astro plugin formats `.astro` files; oxfmt
owns supported source and configuration formats.

Start content changes in the page, document changes in the layout and visual
changes in the stylesheet. Keep the system font and calm neutral palette.
The main title uses 24px; hierarchy comes from alignment, spacing and contrast.

Build output is `dist/`. Disposable caches live in `.artifacts/`; Astro also
owns its generated `.astro/` type declarations. Neither is committed.
