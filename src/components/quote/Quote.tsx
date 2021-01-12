import React from 'react'
import { QuoteProps } from './Quote.types'
import { StyledBlockquote } from './Quote.styles'

export const Quote: React.FC<QuoteProps> = ({ children, ...props }) => {
  return (
    <StyledBlockquote as="blockquote" textAlign="center" {...props}>
      "{children}"
    </StyledBlockquote>
  )
}
