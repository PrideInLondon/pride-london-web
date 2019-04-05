import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from './Image'
import Paragraph from './Paragraph'

const renderParagraph = children => <Paragraph>{children}</Paragraph>

const renderImage = ({
  data: {
    target: {
      fields: { file },
    },
  },
}) => <Image src={file['en-GB'].url} />

export default {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderImage,
    [BLOCKS.PARAGRAPH]: renderParagraph,
  },
}

renderImage.propTypes = {
  data: PropTypes.object.isRequired,
}
