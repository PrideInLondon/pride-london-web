import React from 'react'
import { QuoteProps } from './Quote.types'
import { StyledBlockquote } from './Quote.styles'

export const Quote: React.FC<QuoteProps> = ({ children, ...props }) => (
  <StyledBlockquote<any> as="blockquote" textAlign="center" {...props}>
    "{children}"
  </StyledBlockquote>
)
