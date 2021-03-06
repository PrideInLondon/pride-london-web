import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderMethods } from './renderMethods'
import { Wrapper } from './RichText.styles'
import { RichTextProps } from './RichText.types'

export const RichText: React.FC<RichTextProps> = ({ document, ...props }) => (
  <Wrapper display="flex" flexDirection="column" alignItems="center" {...props}>
    {documentToReactComponents(document, renderMethods)}
  </Wrapper>
)
