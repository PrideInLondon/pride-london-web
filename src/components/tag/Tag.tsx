import React from 'react'
import { TagWrapper } from './Tag.styles'
import { TagProps } from './Tag.types'

export const Tag: React.FC<TagProps> = ({ children, ...props }) => (
  <TagWrapper {...props}>{children}</TagWrapper>
)

Tag.defaultProps = {
  variant: 'primary',
}
