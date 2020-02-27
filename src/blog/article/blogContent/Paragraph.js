import React from 'react'
import PropTypes from 'prop-types'
import { StyledParagraph } from './Paragraph.styles'

const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
