# Workflow

The npm scripts are the real interface; the Makefile wraps them in Docker.

## Scripts

| Script          | Does                               |
| --------------- | ---------------------------------- |
| `npm run dev`   | Next dev server on port 3000       |
| `npm run build` | Next production build              |
| `npm run start` | Serves the build                   |
| `npm run test`  | Jest                               |
| `npm run lint`  | Type, code and style in sequence   |
| `npm run clean` | Removes `.next` and `node_modules` |

`npm run lint` chains `lint:type` (`tsc --noEmit`), `lint:code` (ESLint) and
`lint:style` (`prettier . --check`). The three are also callable alone.

The Makefile targets — `build`, `start`, `dev`, `test`, `lint`, `clean` —
run the same scripts inside a container built from the Dockerfile, with
`src/` and `__tests__/` mounted.

## CI

One GitHub Actions workflow, `.github/workflows/quality.yml`, on push to
`main` and `develop`. Two jobs, `make test` and `make lint`, so CI and a
local run execute the same thing.

## None of it runs today

`npm ci` fails on a lockfile out of sync with `package.json`, and
`npm install` cannot repair it: the pinned `@jterrazz/package-typescript`,
`@jterrazz/package-typescript-quality` and
`@jterrazz/package-typescript-test` are no longer on npm — the family was
renamed. Verified 2026-09-06.

Reviving the tree means moving to the current packages and regenerating the
lockfile. Until someone does, the scripts above describe the intent, not a
working command.
