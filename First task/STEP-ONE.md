# Portfolio sample: Step 1

The Stellar sample now identifies M.Unse as the front-end implementer, clearly labels fictional product content, and provides a real project-enquiry email link.

## Changes

- A portfolio notice on every page, with an email link to `muhammadunse11@gmail.com`.
- Clear labels on sample metrics, illustrative brand logos, fictional profiles and testimonial cards.
- Finished feature copy, About-page descriptions, FAQs and expandable development notes.
- Working Product, Contact, Project package and cross-page FAQ anchors.
- Explicit demo messages for legacy sign-in/sign-up URLs and a missing-page view for other routes.
- A local-only example email form. No address is sent, stored or subscribed.
- A project-enquiry section describing the agreed US$400 landing-page offer.
- Original Stellar / Flowbase design attribution retained.

## Validation

- Production build: `npm run build` passed.
- Home and About checked at 375, 768 and 1440 CSS pixels; no horizontal page overflow.
- Mobile navigation opens and closes on selection.
- Invalid email rejected; valid example address produces the demo confirmation and clears the field.
- FAQ expands, build-details dialog opens/closes, and development-note cards expand.
- Cross-page anchors reach the correct sections below the fixed header.
- Legacy account and missing-page routes render explicit messages.
- No browser console errors or warnings observed in the tested flows.

## Contact settings

Edit `src/data/developer.js` to change the public name, email or GitHub links. The contact buttons open the visitor's email application; they do not send an email automatically.

## Vercel

Keep the existing project configuration:

- Root directory: `First task`
- Build command: `npm run build`
- Output directory: `dist`
- Existing `vercel.json` provides the SPA rewrite.

The code is ready for the existing project. A local build alone does not update the public Vercel deployment.

## Original design and assets

This is an implementation of Flowbase's Stellar design, not a claim of original visual design or real customer relationships. The original attribution remains visible. The repository does not contain proof of a template/asset licence; confirm the rights associated with your original source before reusing it in another client project. Product page: https://www.flowbase.co/templates/stellar
