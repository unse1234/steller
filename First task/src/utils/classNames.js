/** Joins truthy class names into a single `className` string. */
export const classNames = (...classes) => classes.filter(Boolean).join(' ')
