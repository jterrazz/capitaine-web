import { testing } from '@jterrazz/test/oxlint';
import { compose, defineConfig, node } from '@jterrazz/typescript/oxlint';

export default defineConfig({
    extends: [compose(node, testing)],
    overrides: [{ files: ['**/*.astro'], rules: { 'codestyle/imports-with-ext': 'off' } }],
});
