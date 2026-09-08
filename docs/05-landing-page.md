# The landing page

The app ships one surface: the root route, rendering `HelloWorldTemplate`
(`src/components/templates/hello-world.template.tsx`).

The words it shows are not this repository's. The brand decides the pitch
and the label; this tree renders them, so what follows says which file
holds which string, not what the string says.

## What it renders

A full-screen hero image, with glass-blur floating cards over it that move
on a scroll parallax. The first card carries the product pitch. The second
is an app-style link card pointing at jterrazz.com.

An email waitlist form — an input and a "Save your seat" button — is
written inside the first card and commented out. Uncommenting it is not
enough to ship it: nothing is wired to receive the address.

## Metadata

`src/app/layout.tsx` sets the site title and carries the favicon set.
`src/app/manifest.ts` ships a PWA manifest under the short name
"Capitaine".

The layout's description string is the one piece of copy still under a
former name — it opens "At Life Captain" (see
[state and names](06-state-and-names.md)).
