import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from './Image'
import Paragraph from './Paragraph'
import Carousel from './Carousel'
import Heading from './Heading'

const renderParagraph = (node, children) => {
  return <Paragraph>{children}</Paragraph>
}
const renderHeading = (heading, node, children) => {
  return <Heading>{React.createElement(heading, null, children)}</Heading>
}
const renderCarousel = node => {
  console.log(node.data.target.fields)
  return <Carousel {...node.data.target.fields} />
}

const renderImage = ({
  data: {
    target: {
      fields: { file },
    },
  },
}) => {
  return <Image src={file['en-GB'].url} />
}

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
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    [BLOCKS.EMBEDDED_ASSET]: renderImage,
  },
}

renderImage.propTypes = {
  data: PropTypes.object.isRequired,
}
