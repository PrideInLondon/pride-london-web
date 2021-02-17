import { Document } from '@contentful/rich-text-types'
import { SpaceProps, LayoutProps } from 'styled-system'
import { IconName } from '../../components/icon/Icon.types'

export interface SocialProps {
  url: string
  name: IconName
}

export interface SocialLinkProps extends SocialProps {
  talentName: string
}

export interface ContentfulTalentProfile {
  name: string
  bio?: {
    json: Document
  }
  website?: string
  instagram?: string
  email?: string
  facebook?: string
  twitter?: string
}

export interface TalentProfileProps extends SpaceProps, LayoutProps {
  title: string
  talent: ContentfulTalentProfile
}
