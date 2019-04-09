import React from 'react'
import PropTypes from 'prop-types'
import { StyledQuote, BlockQuote } from './styles'

const Quote = ({ children }) => {
  return (
    <StyledQuote>
      <BlockQuote>{children}</BlockQuote>
    </StyledQuote>
  )
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Quote
