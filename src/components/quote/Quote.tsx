import React from 'react'
import { H4 } from '../typography'
import { QuoteProps } from './Quote.types'
import { StyledBlockquote } from './Quote.styles'

export const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <StyledBlockquote>
      <H4>"{children}"</H4>
    </StyledBlockquote>
  )
}
