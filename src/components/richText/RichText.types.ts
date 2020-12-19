import { Document } from '@contentful/rich-text-types'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface Image {
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
  }
}

export interface RichTextProps extends LayoutProps, SpaceProps {
  document: Document
}
