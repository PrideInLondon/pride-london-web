import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import Button from '../../components/button'
import Figure from './components/figure'
import Video from './components/video'

const StyledButton = styled(Button)`
  margin-bottom: 1.25em;
`

export const renderFigure = node => <Figure {...node.data.target.fields} />

const renderStyledButton = ({ primary, to, content }) => (
  <StyledButton primary={primary} to={to}>
    {content}
  </StyledButton>
)

const renderTypeformButton = ({ primary, content, to }) => {
  let typeformEmbed = null

  const openForm = () => {
    if (typeformEmbed && typeformEmbed.typeform) {
      typeformEmbed.typeform.open()
    }
  }

  return (
    <span>
      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url={to}
        style={{ zIndex: -1 }}
        hideHeaders
        hideFooter
        mode="drawer_left"
        ref={tf => {
          typeformEmbed = tf
        }}
        autoClose={5}
      />
      <StyledButton primary={primary} onClick={openForm}>
        {content}
      </StyledButton>
    </span>
  )
}

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
    return null
  }

  const primary = fields.buttonPrimary['en-GB']
  const to = fields.buttonHref['en-GB']
  const content = fields.buttonContent ? fields.buttonContent['en-GB'] : null

  const typeformUrl = 'https://prideinlondon.typeform.com'

  if (to.substr(0, typeformUrl.length) === typeformUrl) {
    return renderTypeformButton({ primary, to, content })
  }

  return renderStyledButton({ primary, to, content })
}

const renderVideo = ({ data }) => <Video {...data.target.fields} />

export const renderEmbeddedEntry = node => {
  switch (node.data.target.sys.contentType.sys.id) {
    case 'video':
      return renderVideo(node)
    case 'button':
      return renderButton(node)
    default:
      return null
  }
}

export default {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderFigure,
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
  },
}

renderFigure.propTypes = {
  data: PropTypes.object.isRequired,
}

renderStyledButton.propTypes = {
  primary: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

renderTypeformButton.propTypes = {
  primary: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

renderButton.propTypes = {
  data: PropTypes.object.isRequired,
}

renderVideo.propTypes = {
  data: PropTypes.object.isRequired,
}
