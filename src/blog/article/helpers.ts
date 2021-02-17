import { colors } from '../../theme/colors'
import { generateSlug } from '../../utils/page-utils'

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Arts & culture':
      return colors.tomato
    case 'History':
      return colors.lemonGreen
    case 'Life':
      return colors.skyBlue
    case 'Stories':
      return colors.fuscia
    default:
      return ''
  }
}

export const generateBlogArticleSlug = (title: string): string =>
  `/blog/${generateSlug(title)}/`
