# Egor Bugaev — personal website

Personal research website: https://epbugaev.github.io/

Built with plain HTML, CSS, and JavaScript. No dependencies or build step.

## Pages

- `index.html`: introduction, recent publications, ongoing work, and news/interviews.
- `research.html`: publications, preprints, research interests, and neural weather forecasting.
- `about.html`: education, experience, teaching, projects, and CV printing.
- `style.css`: responsive layout and light/dark themes.
- `theme.js` and `site.js`: theme preference, print control, and legacy redirects.
- `assets/profile.jpg`: profile photograph.

Older page URLs redirect to the corresponding sections.

## Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765. Stop the server with Ctrl+C.

## Publishing updates

GitHub Pages serves the root of the `main` branch. The `.nojekyll` file disables Jekyll processing.

After editing and checking the site, commit and push the changes to `main`. GitHub Pages then republishes the website automatically.

Keep homepage publication previews and current roles in sync with the full records on the research and background pages.
