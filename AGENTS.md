# Agent brief — capitaine-web

The web client for Capitaine, an AI habit and growth coach. A Next.js 14
App Router app on React 18 and Tailwind, deployed to Vercel. This file
routes; the corpus is `docs/`, and it is not restated here.

## Mental model

- One page, no product behind it. The root route renders a landing
  template with the pitch copy and a commented-out waitlist form; there is
  no API call anywhere in the tree.
- Atomic design is the rule for components: a route renders a template, a
  template composes organisms and atoms. A route that starts composing
  atoms itself has skipped a level.
- Tailwind first; an SCSS module only where a keyframe or a selector
  Tailwind cannot express is needed.
- The tree still carries names from the portfolio scaffold it was copied
  from, and from the product's former name. Read
  `docs/04-state-and-names.md` before assuming an identifier is a typo.

## Where knowledge lives

| Working on…                          | Read                         |
| ------------------------------------ | ---------------------------- |
| The Next.js app, components, styling | `docs/01-architecture.md`    |
| The landing page and its copy        | `docs/02-landing-page.md`    |
| Scripts, the toolchain, the CI       | `docs/03-workflow.md`        |
| What is built, and the names in code | `docs/04-state-and-names.md` |
| Why a choice was made                | `docs/decisions/`            |

The corpus map is `docs/README.md`. The product knowledge behind the
repository — the vision, the glossary, what Capitaine is for — is not here:
it is the brand corpus in `jterrazz-os`, at `home/capitaine/wiki/`.

## Commands

```bash
npm run dev    # Next dev server on port 3000
npm test       # Vitest — no suite exists yet
npm run lint   # typescript check
```

## Standing rules

- A change to behaviour updates the matching `docs/` chapter in the same
  change. The chapters are the manual; this brief only points at them.
- Copy shipped on the landing page is product wording. Changing it changes
  what the brand claims, so `docs/02-landing-page.md` records the new
  wording in the same change.
