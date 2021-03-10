import React from 'react'
import { H3, H5 } from '../typography'
import { QuoteProps } from './Quote.types'

export const Quote: React.FC<QuoteProps> = ({ children, ...props }) => {
  const allProps = {
    as: 'blockquote',
    textAlign: 'center',
    margin: '0',
    ...props,
  } as const
  return (
    <>
      <H3 display={{ default: 'none', md: 'block' }} {...allProps}>
        "{children}"
      </H3>
      <H5 display={{ default: 'block', md: 'none' }} {...allProps}>
        "{children}"
      </H5>
    </>
  )
}
