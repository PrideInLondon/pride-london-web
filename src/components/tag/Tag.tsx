import React from 'react'
import { Wrapper } from './Tag.styles'
import { TagProps } from './Tag.types'

export const Tag: React.FC<TagProps> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Tag.defaultProps = {
  variant: 'primary',
}
