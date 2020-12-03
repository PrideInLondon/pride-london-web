import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'

export interface SocialLinkProps {
  url: string
  name: IconName
}

export interface TalentProfileProps extends SpaceProps, LayoutProps {
  type: string
  website?: string
  instagram?: string
  email?: string
  facebook?: string
  twitter?: string
}
