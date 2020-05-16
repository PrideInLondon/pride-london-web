import React from 'react'
import { InternalIconProps } from '../Icon.types'

const LaptopIcon = ({ colors: { primary } }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill={primary}
      d="M1 28h30v-5h-2.004V5h-26L3 23H1v5zM4.996 7h22v16h-22V7zM3 25h25.996v1H3v-1z"
    />
    <path
      fill="#2CDA9D"
      fillRule="evenodd"
      d="M16 9c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
      clipRule="evenodd"
    />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M19 15l-5 3v-6l5 3z"
      clipRule="evenodd"
    />
  </svg>
)

export default LaptopIcon
