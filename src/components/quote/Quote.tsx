import React from 'react'
import { H4 } from '../typography'
import { QuoteProps } from './Quote.types'
import { StyledBlockquote, StyledFigCaption } from './Quote.styles'

export const Quote: React.FC<QuoteProps> = ({ quote, caption }) => {
  return (
    <StyledBlockquote>
      <H4>"{quote}"</H4>
      <StyledFigCaption>{caption}</StyledFigCaption>
    </StyledBlockquote>
  )
}
