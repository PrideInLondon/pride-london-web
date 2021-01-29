import { Document } from '@contentful/rich-text-types'
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system'

export interface ContentfulImage {
  fields: {
    image: {
      [key: string]: {
        fields: {
          file: {
            [key: string]: {
              url: string
            }
          }
        }
      }
    }
    altText: {
      [key: string]: string
    }
    caption?: {
      [key: string]: string
    }
  }
}

export interface RichTextProps extends FlexboxProps, LayoutProps, SpaceProps {
  document: Document
}
