# Operating

How it runs: the `Dockerfile`, what running it takes, and what a merge to
`main` actually triggers.

## The image

`Dockerfile` is a four-step, single-stage build on `node:24-alpine`:
install with `npm ci` off the lockfile (cached before the rest of the tree
is copied in, so a dependency-only change does not invalidate the layer),
copy the application, `npm run build`, then `CMD ["npm", "start"]`. Running
it takes:

```bash
docker build -t capitaine-web .
docker run -p 3000:3000 capitaine-web
```

`npm start` serves the Next production build on port 3000, the same port
`npm run dev` uses locally.

## What a merge triggers

Nothing, mechanically. `.github/workflows/quality.yml` is the only
workflow in the repository, and its two jobs are `make test` and
`make lint` — neither builds the image nor pushes it anywhere. The
`Dockerfile` is kept as a recipe for anyone who wants to run the app in a
container; today no CI step, and no other file in this tree, invokes it.

The `.gitignore` reserves `.vercel` as a tool-owned path, which is the one
trace in this tree of Vercel as the intended host — but that connection, if
live, is configured on Vercel's side, outside this repository's own
automation. A push to `main` deploys nothing that this repository controls.
