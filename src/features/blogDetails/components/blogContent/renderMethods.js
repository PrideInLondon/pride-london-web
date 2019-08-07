import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Gallery from '../../../../components/gallery'
import Image from './Image'
import Paragraph from './Paragraph'
import Carousel from './Carousel'
import Heading from './Heading'
import List from './List'
import Quote from './Quote'
import Hr from './Hr'

const renderParagraph = (_node, children) => <Paragraph>{children}</Paragraph>

const renderHeading = heading => (_node, children) => (
  <Heading>{React.createElement(heading, null, children)}</Heading>
)

const renderList = listType => (_node, children) => (
  <List>{React.createElement(listType, null, children)}</List>
)

const renderCarousel = node => <Carousel {...node.data.target.fields} />

const renderQuote = (_node, children) => <Quote>{children}</Quote>

const renderHr = () => <Hr />

const renderImage = node => <Image {...node.data.target.fields} />

const renderAssetHyperlink = (node, children) => (
  <a href={node.data.target.fields.file['en-GB'].url}>{children}</a>
)

const rendeUrlHyperlink = (node, children) => (
  <a href={node.data.uri}>{children}</a>
)

const renderGallery = ({
  data: {
    target: {
      fields: { images },
    },
  },
}) => {
  const photos = images['en-GB'].map(
    ({ fields: { altText, description, image, name, photographer } }) => {
      const imageUrl = image['en-GB'].fields.file['en-GB'].url
      const imageAltText = altText ? altText['en-GB'] : ''
      const imageAuthor = photographer
        ? {
            name: photographer['en-GB'].fields.name['en-GB'],
            url: photographer['en-GB'].fields.url['en-GB'],
          }
        : null
      return {
        name: name['en-GB'],
        description: description ? description['en-GB'] : null,
        photographer: imageAuthor,
        originalAlt: imageAltText,
        thumbnailAlt: imageAltText,
        original: `${imageUrl}?w=1920&h=1080&fit=fill`,
        thumbnail: `${imageUrl}?w=200&h=120&fit=fill`,
      }
    }
  )
  return <Gallery images={photos} />
}

const renderEmbeddedEntry = node => {
  switch (node.data.target.sys.contentType.sys.id) {
    case 'carousel':
      return renderCarousel(node)
    case 'gallery':
      return renderGallery(node)
    default:
      return null
  }
  // if (node.data.target.sys.contentType.sys.id === 'carousel') {
  //   return renderCarousel(node)
  // }
  // return null
}

export default {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.HEADING_1]: renderHeading('h1'),
    [BLOCKS.HEADING_2]: renderHeading('h2'),
    [BLOCKS.HEADING_3]: renderHeading('h3'),
    [BLOCKS.HEADING_4]: renderHeading('h4'),
    [BLOCKS.HEADING_5]: renderHeading('h5'),
    [BLOCKS.HEADING_6]: renderHeading('h6'),
    [BLOCKS.UL_LIST]: renderList('ul'),
    [BLOCKS.OL_LIST]: renderList('ol'),
    [BLOCKS.QUOTE]: renderQuote,
    [BLOCKS.HR]: renderHr,
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    [BLOCKS.EMBEDDED_ASSET]: renderImage,

    [INLINES.HYPERLINK]: rendeUrlHyperlink,
    [INLINES.ENTRY_HYPERLINK]: () => null,
    [INLINES.ASSET_HYPERLINK]: renderAssetHyperlink,
    [INLINES.EMBEDDED_ENTRY]: () => null,
  },
}

renderImage.propTypes = {
  data: PropTypes.object.isRequired,
}

renderGallery.propTypes = {
  data: PropTypes.object.isRequired,
}
