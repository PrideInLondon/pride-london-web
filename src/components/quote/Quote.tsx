import React from 'react'
import { H3 } from '../typography'
import { QuoteProps } from './Quote.types'
// desktop: 3
// mobile: 5
export const Quote: React.FC<QuoteProps> = ({ children, ...props }) => (
  <H3 as="blockquote" textAlign="center" margin="0 !important" {...props}>
    "{children}"
  </H3>
)
