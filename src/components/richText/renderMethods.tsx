import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { P } from '../typography'
import { Hyperlink } from './RichText.styles'

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

const renderHyperlink: NodeRenderer = ({ data: { uri } }, children) => (
  <Hyperlink to={uri}>{children}</Hyperlink>
)

export const renderMethods = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
}
