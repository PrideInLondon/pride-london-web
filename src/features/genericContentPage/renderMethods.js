import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Button from '../../components/button'
import Figure from './components/figure'
import Video from './components/video'

const renderFigure = node => <Figure {...node.data.target.fields} />

const renderButton = node => {
  const {
    data: {
      target: { fields },
    },
  } = node

  if (
    typeof fields === 'undefined' ||
    typeof fields.buttonContent === 'undefined'
  ) {
    return
  }

  const primary = fields.buttonPrimary['en-GB']

  return (
    <Button primary={primary} link to={fields.buttonHref['en-GB']}>
      {fields.buttonContent && fields.buttonContent['en-GB']}
    </Button>
  )
}

const renderVideo = ({ data }) => <Video {...data.target.fields} />

export default {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderFigure,
    [BLOCKS.EMBEDDED_ENTRY]: renderButton,
    [INLINES.EMBEDDED_ENTRY]: renderVideo,
  },
}

renderFigure.propTypes = {
  data: PropTypes.object.isRequired,
}

renderButton.propTypes = {
  data: PropTypes.object.isRequired,
}

renderVideo.propTypes = {
  data: PropTypes.object.isRequired,
}
