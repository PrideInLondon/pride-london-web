import { Document } from '@contentful/rich-text-types'
import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'

export interface SocialLinkProps {
  url: string
  name: IconName
  talentType: string
}

export interface TalentProfileProps extends SpaceProps, LayoutProps {
  type: string
  bio: {
    json: Document
  }
  website?: string
  instagram?: string
  email?: string
  facebook?: string
  twitter?: string
}
