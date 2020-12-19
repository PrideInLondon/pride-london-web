import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { colors } from '../../theme/colors'
import { getRandomInt } from '../../utils/number-utils'
import { RippedSection } from '../rippedSection'
import { Rip, RipVariant } from '../rippedSection/Rip.types'
import { Video } from '../video'
import { VideoProps } from '../video/Video.types'
import { P } from '../typography'
import { Quote } from '../quote'
import { Hyperlink } from './RichText.styles'
import { ContentfulImage } from './RichText.types'

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
  { fields: { image, altText } }: ContentfulImage,
  locale = DEFAULT_LOCALE
) => {
  const {
    fields: { file },
  } = getAnyForLocale(image, locale)
  const { url } = getAnyForLocale(file, locale)
  return { src: url, alt: getStringForLocale(altText, locale) }
}

const generateRip = (): Rip => ({
  variant: getRandomInt(1, 5) as RipVariant,
  color: colors.white,
})

const renderImage: NodeRenderer = ({ data: { target } }) => {
  const props = getImageForLocale(target)
  // alt is included in the props but silly eslint doesn't see this here
  /* eslint-disable jsx-a11y/alt-text */
  return (
    <RippedSection
      rips={{
        top: generateRip(),
        bottom: generateRip(),
      }}
    >
      <img {...props} width="100%" />
    </RippedSection>
  )
  /* eslint-enable jsx-a11y/alt-text */
}

const renderVideo: NodeRenderer = ({
  data: {
    target: {
      fields: { host, videoId, caption, image },
    },
  },
}) => {
  const props: VideoProps = {
    host: getAnyForLocale(host),
    videoId: getStringForLocale(videoId),
    caption: getStringForLocale(caption),
    coverImage: getImageForLocale(getAnyForLocale(image)),
  }
  return <Video {...props} />
}

export const renderEmbeddedEntry: NodeRenderer = node => {
  switch (node.data.target.sys.contentType.sys.id) {
    case 'image':
      return renderImage(node, null)
    case 'video':
      return renderVideo(node, null)
  }
}

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

const renderQuote: NodeRenderer = (_node, children) => <Quote>{children}</Quote>

const renderHyperlink: NodeRenderer = ({ data: { uri } }, children) => (
  <Hyperlink to={uri}>{children}</Hyperlink>
)

export const renderMethods = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.QUOTE]: renderQuote,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
}
