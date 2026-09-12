# Architecture

A static Astro page introduces cap01 without shipping a client framework.

| Part                     | Responsibility                                                 |
| ------------------------ | -------------------------------------------------------------- |
| `src/pages/index.astro`  | Public introduction, three principles and current availability |
| `src/layouts/site.astro` | Document metadata and accessible document shell                |
| `src/styles/site.css`    | Shared typography, colors, spacing and responsive layout       |
| `src/domain/app-link.ts` | Development versus production application-link policy          |

There are no React islands, client scripts, tracking calls, forms or backend
connections. Native anchors provide section navigation. The decorative orbit is
CSS, remains still and carries no product data.

The page describes AI coaching as the direction of the product. The current
preview is a browser-local habit and journal workspace; mobile pairing and AI
coaching are not advertised as available. This repository does not own product
state, account handling or the mobile application.
