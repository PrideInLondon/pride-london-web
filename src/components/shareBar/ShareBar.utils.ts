import { SharePlatform } from '../../utils/share-utils'
import { capitaliseFirst } from '../../utils/string-utils'

export const generatePlatformName = (name: SharePlatform) =>
  capitaliseFirst(name.split('-').map(capitaliseFirst).join(''))
