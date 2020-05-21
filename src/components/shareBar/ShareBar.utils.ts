import { SharePlatform } from '../../utils/share-utils'

const capitaliseFirst = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const generatePlatformName = (name: SharePlatform) =>
  capitaliseFirst(
    name
      .split('-')
      .map(capitaliseFirst)
      .join('')
  )
