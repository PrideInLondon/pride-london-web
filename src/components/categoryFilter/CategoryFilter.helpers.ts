import { colors } from '../../theme/colors'
import { Category } from './CategoryFilter.types'

export const CATEGORIES: Category[] = [
  { name: 'Drink', color: colors.tomato },
  { name: 'Eat', color: colors.pink },
  { name: 'Party', color: colors.greyBlue },
  { name: 'Shop', color: colors.eucalyptusGreen },
  { name: 'Sleep', color: colors.fuscia },
]

export const ALL_CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.yellow, isSelectAll: true },
  ...CATEGORIES,
]

export const ENTRIES = [...Array(CATEGORIES.length * 2)].map((_, index) => ({
  text: `Entry #${index + 1}`,
  category: CATEGORIES[index % CATEGORIES.length],
}))

export const ENTRIES_WITH_CATEGORY_ARRAY = [
  ...Array(CATEGORIES.length * 2),
].map((_, index) => ({
  text: `Entry #${index + 1}`,
  category: [...Array(index % CATEGORIES.length)].map((_, i) => {
    return CATEGORIES[(index + i) % CATEGORIES.length].name
  }),
}))
