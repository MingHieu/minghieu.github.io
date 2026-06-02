import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  const isUserSite = repoName.endsWith('.github.io');
  const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

  return {
    // For GitHub Pages project sites, assets must be prefixed with /<repo>/.
    base: isGithubActions ? (isUserSite ? '/' : `/${repoName}/`) : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // server: {
    //   host: true,
    // },
  };
});
