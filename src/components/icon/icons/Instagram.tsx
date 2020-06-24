import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Instagram = ({ colors: { primary }, ...props }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={primary}
      fillRule="evenodd"
      d="M26 6H6v20h20V6zM4 4v24h24V4H4z"
      clipRule="evenodd"
    />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M16 20c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"
      clipRule="evenodd"
    />
    <circle cx="23" cy="9" r="2" fill={primary} />
  </svg>
)

export default Instagram
