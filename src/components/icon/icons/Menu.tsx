import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Menu = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill={secondary} d="M4 25H28V26H4z" />
    <path fill={primary} d="M4 23H28V25H4z" />
    <path fill={secondary} d="M4 16H28V17H4z" />
    <path fill={primary} d="M4 14H28V16H4z" />
    <path fill={secondary} d="M4 7H28V8H4z" />
    <path fill={primary} d="M4 5H28V7H4z" />
  </svg>
)

export default Menu
