# Workflow

The npm scripts are the real interface; the Makefile wraps the three CI
calls around them.

## Scripts

| Script             | Does                                              |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Next dev server on port 3000                      |
| `npm run build`    | Next production build, into `.artifacts/next`     |
| `npm run start`    | Serves the build                                  |
| `npm test`         | Vitest — no suite exists yet, so the run is empty |
| `npm run lint`     | `typescript check`                                |
| `npm run lint:fix` | `typescript fix`                                  |
| `npm run clean`    | Removes `.artifacts/` and `node_modules`          |

`npm run lint` is one command from `@jterrazz/typescript`: types, oxlint,
oxfmt, the artefact gate and knip in a single pass. What each pass does is
that package's own documentation, not this chapter's.

## Where output goes

Every build, test and lint artefact lives under `.artifacts/<tool>/` at the
repository root — the Next build in `.artifacts/next`, the incremental
buildinfo in `.artifacts/tsc`. Two paths stay where their tool fixes them,
`next-env.d.ts` and `.vercel`, and the `.gitignore` names nothing else.

## The two local tsconfig lines

`tsconfig.json` extends `@jterrazz/typescript/tsconfig/next` and then
restates two things the preset already answers, because Next 14 cannot read
them through an `extends`:

- `include` — Next 14 pushes its generated route types into the `include`
  array of the file it is handed, and crashes when that file has none of
  its own.
- `jsx: preserve` — Next 14 requires it and rewrites the tsconfig on every
  build until it is there; the preset says `react-jsx`, which Next 15 and
  later accept.

Both lines go the day this app moves to a Next major that reads the preset,
and neither is a licence to add a third.

## CI

One GitHub Actions workflow, `.github/workflows/quality.yml`, on push to
`main` and `develop`. Two jobs, `make test` and `make lint`, so CI and a
local run execute the same thing.

`Dockerfile` builds a container image of the app. Nothing in this repository
invokes it — the deploy target is Vercel — and it is kept as the recipe for
anyone who wants one.
