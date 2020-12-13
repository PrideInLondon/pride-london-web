import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderMethods } from './renderMethods'
import { RichTextProps } from './RichText.types'

export const RichText: React.FC<RichTextProps> = ({ document }) => (
  <>{documentToReactComponents(document, renderMethods)}</>
)
