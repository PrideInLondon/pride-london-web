import { Document } from '@contentful/rich-text-types'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface RichTextProps extends LayoutProps, SpaceProps {
  document: Document
}
