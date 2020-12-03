import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'

export interface SocialLinkProps {
  url: string
  name: IconName
}

interface SocialLinks {
  website: string
  instagram: string
  email: string
  facebook: string
  twitter: string
}

export interface TalentProfileProps
  extends SocialLinks,
    SpaceProps,
    LayoutProps {
  type: string
}
