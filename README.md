# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy To GitHub Pages

This project is deployed using [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Checklist:

1. In GitHub repo settings, go to **Pages**.
2. Set **Source** to **GitHub Actions** (do not use `Deploy from a branch`).
3. Push to `main` to trigger the deploy workflow.

Why this matters:

- If Pages serves the repository root directly, it can serve [`index.html`](index.html) source with `src/main.jsx`.
- Browsers then block module loading with MIME errors like `text/jsx`.
- The workflow deploys the built `dist/` output, which uses hashed JavaScript files under `assets/` and works correctly on Pages.
