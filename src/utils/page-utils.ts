import slugify from 'slugify'

export const generateSlug = (str: string): string =>
  `${slugify(str, {
    lower: true,
    remove: /[<>:"/\\|?*,'+]/g,
  })}`
