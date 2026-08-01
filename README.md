# drew.youngren.nyc

Personal and teaching site built with SvelteKit and exported as static files for GitHub Pages.

## Develop

```sh
npm install
npm run dev
```

Run `npm run check` and `npm run build` before publishing. The build copies the tracked teaching archive into the static output so existing course links continue to work.

## Add a page

Create a directory under `src/routes` with a `+page.svelte` file. For example, `src/routes/resources/+page.svelte` becomes `/resources/`.

Pushes to `master` are built and deployed by the GitHub Pages workflow in `.github/workflows/deploy.yml`.
