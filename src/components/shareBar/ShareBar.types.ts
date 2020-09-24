import { ShareContent } from '../../utils/share-utils'

export const SHARE_BAR_VARIANTS = ['horizontal', 'vertical'] as const

type ShareBarVariant = typeof SHARE_BAR_VARIANTS[number]

export interface ShareBarProps {
  variant: ShareBarVariant
  content: ShareContent
}
