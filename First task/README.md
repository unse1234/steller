# Stellar

Landing page for Stellar, built from the Stellar Framer template with React 19,
Vite and Tailwind CSS v4.

## Scripts

```sh
npm install
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  assets/        images plus index.js, the asset manifest
  components/
    layout/      page chrome and layout primitives (Navbar, Footer, SiteLayout, SplitSection)
    sections/    one folder per page section
    ui/          small reusable building blocks (Button, Card, SectionHeading, …)
    widgets/     product UI cards used inside section visuals
  data/          section content and sample data
  pages/         page compositions
  styles/        Tailwind entry, theme tokens, base styles and custom utilities
  utils/         helpers
```

## Conventions

- **Components:** one folder per component with `Name.jsx` (default export).
- **Styling:** Tailwind utilities in `className`, built from the theme in
  `styles/variables.css` (Tailwind's defaults are cleared, so only the
  design's colours, type scale, radii, shadows and breakpoints exist).
  Breakpoints are `tablet:` (640px), `desktop:` (1120px) and `wide:`
  (1300px). Write classes in Tailwind's canonical form, as the VS Code
  extension suggests.
- **Overrides:** components merge their `className` prop last through
  `utils/classNames.js` (tailwind-merge), so a consumer's utility wins over
  the component's default. Inner elements take props such as
  `titleClassName` rather than descendant selectors. When adding a theme
  token with a new name, list it in `classNames.js` too.
- **Custom CSS:** only the base reset (`styles/globals.css`) and utilities
  Tailwind lacks (`styles/utilities.css`). Preflight is not used.
- **Assets:** files are kebab-case and named after what they depict, and every
  file is registered in `assets/index.js`. Data files decide what each asset
  is used for.
- **Content:** section copy and sample data live in `src/data`. Illustrative
  visuals are exposed to assistive technology as one image with a
  `visualLabel` summary.
- **Missing artwork:** manifest entries set to `null` render as a same-sized
  `AssetSlot` placeholder until the file is supplied.
