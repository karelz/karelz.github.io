# karelz.github.io

Source for [karelz.github.io](https://karelz.github.io), built with
[Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages.

## Edit content

Pages are Markdown files in `src/`. Shared page markup is in
`src/_includes/layouts/base.njk`, and the site styles are in
`src/assets/site.css`.

## Preview locally

```powershell
npm install
npm run dev
```

Open <http://localhost:8080>. Eleventy reloads the browser after content or
style changes.

## Build

```powershell
npm ci
npm run build
```

The generated site is written to `_site/`. Pushes to `master` are deployed by
the GitHub Pages workflow in `.github/workflows/pages.yml`.
