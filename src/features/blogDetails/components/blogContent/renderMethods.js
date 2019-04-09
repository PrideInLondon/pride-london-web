import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Image from './Image'
import Paragraph from './Paragraph'
import Carousel from './Carousel'
import Heading from './Heading'
import List from './List'
import Quote from './Quote'
import Hr from './Hr'

const renderParagraph = (_node, children) => <Paragraph>{children}</Paragraph>

const renderHeading = (heading, _node, children) => (
  <Heading>{React.createElement(heading, null, children)}</Heading>
)

const renderList = (listType, _node, children) => (
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

const renderEmbeddedEntry = (node, children) => {
  switch (node.data.target.sys.contentType.sys.id) {
    case 'carousel':
      return renderCarousel(node, children)
  }
  return null
}

export default {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [BLOCKS.HEADING_1]: renderHeading.bind(this, 'h1'),
    [BLOCKS.HEADING_2]: renderHeading.bind(this, 'h2'),
    [BLOCKS.HEADING_3]: renderHeading.bind(this, 'h3'),
    [BLOCKS.HEADING_4]: renderHeading.bind(this, 'h4'),
    [BLOCKS.HEADING_5]: renderHeading.bind(this, 'h5'),
    [BLOCKS.HEADING_6]: renderHeading.bind(this, 'h6'),
    [BLOCKS.UL_LIST]: renderList.bind(this, 'ul'),
    [BLOCKS.OL_LIST]: renderList.bind(this, 'ol'),
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
