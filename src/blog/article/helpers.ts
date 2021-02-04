import { generateSlug } from '../../utils/page-utils'

export const generateBlogArticleSlug = (title: string): string =>
  `/blog/${generateSlug(title)}/`
