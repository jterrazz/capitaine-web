import { defineConfig, next } from '@jterrazz/typescript/oxlint';

export default defineConfig({
    extends: [next],
    rules: {
        // Rules the retired ESLint base never enforced. Each one asks for a
        // Rewrite of the landing page's component structure, which is product
        // Surface with no test behind it; the migration moves the toolchain
        // And leaves that surface exactly as it shipped.
        'no-shadow': 'off',
        'one-var': 'off',
        'react/function-component-definition': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/static-components': 'off',
        'unicorn/consistent-function-scoping': 'off',
    },
});
