import { extendTailwindMerge } from 'tailwind-merge'

/*
 * Theme token names that tailwind-merge cannot infer (see styles/variables.css).
 * Without them, `text-md-plus` or `shadow-floating` would read as colours and
 * be dropped next to a real colour utility.
 */
const mergeClasses = extendTailwindMerge({
  extend: {
    theme: {
      text: ['md-plus', 'display-sm', 'display-md', 'display-lg', 'display-xl'],
      'font-weight': ['regular'],
      tracking: ['snug', 'snugger'],
      leading: ['comfortable'],
      radius: ['pill'],
      shadow: ['ring-edge', 'floating', 'floating-soft', 'accent', 'accent-pill', 'accent-button'],
      spacing: ['gutter', 'section', 'section-lg'],
      container: ['page', 'medium', 'narrow', 'compact'],
      breakpoint: ['tablet', 'desktop', 'wide'],
      ease: ['standard'],
      animate: ['logo-ticker'],
    },
    classGroups: {
      'bg-image': [{ bg: ['gradient-accent'] }],
      'ring-w': [{ ring: ['sm', 'md'] }],
      duration: [{ duration: ['fast', 'medium'] }],
      z: [{ z: ['header'] }],
    },
  },
})

/**
 * Joins truthy class names into a single `className` string. When Tailwind
 * utilities conflict, the later one wins, so a component's `className` prop
 * can override its defaults.
 */
export const classNames = (...classes) => mergeClasses(...classes)
