import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Live = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx="16" cy="16" r="8" fill={secondary} />
    <circle cx="16" cy="16" r="6" fill={primary} />
  </svg>
)

export default Live
