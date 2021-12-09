const classNames = (...classes: string[]) =>
  classes
    .filter(Boolean)
    .map((className) => className.trim())
    .join(' ')
    .trim()

export { classNames }
