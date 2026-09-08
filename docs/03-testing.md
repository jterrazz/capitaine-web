# Testing

What proves a change, today: nothing mechanical. `npm test` runs Vitest with
`--passWithNoTests`, and no spec file exists anywhere in the tree — the
command exits 0 on an empty run, not on a verified one.

The only gate CI enforces is `npm run lint` (`typescript check`): types,
oxlint, oxfmt, the artefact convention and knip. It proves the code
compiles and is shaped as the toolchain expects; it proves nothing about
behaviour.

A change to the one surface this app ships — the landing page — is
reviewed by eye against [The landing page](05-landing-page.md), not by a
suite. Writing the first spec is future work, not a gap this chapter can
paper over.
