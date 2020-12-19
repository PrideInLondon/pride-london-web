import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { P } from '../typography'
import { Quote } from '../quote'
import { Hyperlink } from './RichText.styles'
import { Image } from './RichText.types'

export const DEFAULT_LOCALE = 'en-GB'

export const getAnyForLocale = <T,>(
  val: { [key: string]: T },
  locale = DEFAULT_LOCALE
): T => val[locale]

export const getStringForLocale = (
  val: { [key: string]: string },
  locale = DEFAULT_LOCALE
): string => getAnyForLocale(val, locale).trim()

export const getImageForLocale = (
  image: { [key: string]: Image },
  locale = DEFAULT_LOCALE
) => {
  const {
    fields: { image: img, altText },
  } = getAnyForLocale(image, locale)
  const {
    fields: { file },
  } = getAnyForLocale(img, locale)
  const { url } = getAnyForLocale(file, locale)
  return { src: url, alt: getStringForLocale(altText, locale) }
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
