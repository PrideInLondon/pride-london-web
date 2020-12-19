import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { P } from '../typography'
import { Quote } from '../quote'
import { Hyperlink } from './RichText.styles'

export const getValueForLocale = <T extends string>(
  val: {
    [key: string]: T
  },
  locale = 'en-GB'
): T => {
  const localeVal = val[locale]
  switch (typeof localeVal) {
    case 'string':
      return localeVal.trim() as T
    default:
      return localeVal
  }
}

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
