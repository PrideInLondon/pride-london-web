import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import Figure from './components/figure'

const renderFigure = node =>
  console.log(node) || <Figure {...node.data.target.fields} />

export default {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderFigure,
  },
}

renderFigure.propTypes = {
  data: PropTypes.object.isRequired,
}
