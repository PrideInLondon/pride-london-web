import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { P } from '../typography'
import { Quote } from '../quote'
import { Hyperlink } from './RichText.styles'

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

const renderQuote: NodeRenderer = (_node, children) => <Quote>{children}</Quote>

const renderHyperlink: NodeRenderer = ({ data: { uri } }, children) => (
  <Hyperlink to={uri}>{children}</Hyperlink>
)

export const renderMethods = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.QUOTE]: renderQuote,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
}
