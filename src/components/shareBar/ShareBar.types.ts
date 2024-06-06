import { ResponsiveValue } from 'styled-system'
import { ShareContent } from '../../utils/share-utils'

export const VARIANTS = ['horizontal', 'vertical'] as const

type ShareBarVariant = (typeof VARIANTS)[number]

export interface ShareBarProps {
  variant: ResponsiveValue<ShareBarVariant>
  content: ShareContent
}
