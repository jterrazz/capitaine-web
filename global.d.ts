// Ambient declaration for side-effect imports of global stylesheets.
// Next.js only ships types for CSS Modules (`*.module.css`), so plain global
// CSS imports (e.g. `import './globals.css'`) need this declaration to satisfy
// TypeScript's module resolution.
declare module '*.css';
declare module '*.scss';
