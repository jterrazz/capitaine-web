/** @type {import('next').NextConfig} */
const nextConfig = {
    // Every build artefact lives under .artifacts/<tool>/.
    distDir: '.artifacts/next',
    experimental: {
        // Next infers the workspace root by walking up for a lockfile, and a
        // Workbench clone sits under a checkout that has one. This app is its
        // Own root: nothing above it belongs to the build. Next 14 carries the
        // Option under experimental, and has no turbopack root to pin.
        outputFileTracingRoot: import.meta.dirname,
    },
};

export default nextConfig;
