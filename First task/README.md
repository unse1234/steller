# Stellar

Landing page for Stellar, built from the Stellar Framer template with React 19,
Vite and plain CSS.

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
    layout/      page chrome and layout primitives (Navbar, SiteLayout, SplitSection)
    sections/    one folder per page section
    ui/          small reusable building blocks (Button, Card, SectionHeading, …)
    widgets/     product UI cards used inside section visuals
  data/          section content and sample data
  pages/         page compositions
  styles/        design tokens, base styles and utilities
  utils/         helpers
```

## Conventions

- **Components:** one folder per component with `Name.jsx` (default export) and `Name.css`.
- **CSS:** BEM class names, logical properties, and design tokens from
  `styles/variables.css` for colours, type, spacing and elevation.
- **Assets:** files are kebab-case and named after what they depict, and every
  file is registered in `assets/index.js`. Data files decide what each asset
  is used for.
- **Content:** section copy and sample data live in `src/data`. Illustrative
  visuals are exposed to assistive technology as one image with a
  `visualLabel` summary.
- **Missing artwork:** manifest entries set to `null` render as a same-sized
  `AssetSlot` placeholder until the file is supplied.
