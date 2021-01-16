import React from 'react'
import { NodeRenderer, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { colors } from '../../theme/colors'
import { lg, xxl } from '../../theme/space'
import { getRandomInt } from '../../utils/number-utils'
import { RippedSection } from '../rippedSection'
import { Rip, RipVariant } from '../rippedSection/Rip.types'
import { Video } from '../video'
import { VideoProps } from '../video/Video.types'
import { Image } from '../image'
import { P } from '../typography'
import { Quote } from '../quote'
import { MultiImageWrapper, Hyperlink } from './RichText.styles'
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
  { fields: { image, altText, caption } }: ContentfulImage,
  locale = DEFAULT_LOCALE
) => {
  const {
    fields: { file },
  } = getAnyForLocale(image, locale)
  const { url } = getAnyForLocale(file, locale)
  return {
    src: url,
    alt: getStringForLocale(altText, locale),
    ...(caption && { caption: getStringForLocale(caption, locale) }),
  }
}

const generateRip = (): Rip => ({
  variant: getRandomInt(1, 5) as RipVariant,
  color: colors.white,
})

const renderImage: NodeRenderer = ({ data: { target } }, _children) => {
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

const renderMultiImage: NodeRenderer = (
  {
    data: {
      target: {
        fields: { images },
      },
    },
  },
  _children
) => (
  <MultiImageWrapper marginY={{ default: 'xl', md: 'xxl' }}>
    {getAnyForLocale<ContentfulImage[]>(images).map(
      (props: ContentfulImage) => (
        <Image {...getImageForLocale(props)} />
      )
    )}
  </MultiImageWrapper>
)

const renderVideo: NodeRenderer = (
  {
    data: {
      target: {
        fields: { host, videoId, caption, image },
      },
    },
  },
  _children
) => {
  const props: VideoProps = {
    host: getAnyForLocale(host),
    videoId: getStringForLocale(videoId),
    caption: getStringForLocale(caption),
    coverImage: getImageForLocale(getAnyForLocale(image)),
  }
  return <Video {...props} />
}

export const renderEmbeddedEntry: NodeRenderer = (node, children) => {
  switch (node.data.target.sys.contentType.sys.id) {
    case 'image':
      return renderImage(node, children)
    case 'multiImage':
      return renderMultiImage(node, children)
    case 'video':
      return renderVideo(node, children)
  }
  return null
}

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

const renderQuote: NodeRenderer = (_node, children) => (
  <Quote
    marginY={{ default: 'xxl', md: (lg + xxl).toString() }}
    maxWidth={1062}
  >
    {children}
  </Quote>
)

const renderHyperlink: NodeRenderer = ({ data: { uri } }, children) => (
  <Hyperlink to={uri}>{children}</Hyperlink>
)

export const renderMethods: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.QUOTE]: renderQuote,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
}
