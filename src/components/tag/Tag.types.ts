import { SpaceProps } from 'styled-system'

export const TAG_VARIANTS = ['primary', 'outline'] as const

type TagVariant = typeof TAG_VARIANTS[number]

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpaceProps {
  color: string
  variant?: TagVariant
}
