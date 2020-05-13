import React from 'react'
import { colors } from '../../theme/colors'
import { IconProps } from './Icon.types'

const OnDemandIcon = ({ variant }: IconProps) => {
  const fill = { blue: colors.indigo, white: colors.white }[variant]
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 8H5V24H27V8ZM3 6V26H29V6H3Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 16L14 20L14 12L20 16Z"
        fill="#2CDA9D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16L13 22L13 10L22 16ZM14.9286 13.4286L14.9286 18.5714L18.7857 16L14.9286 13.4286Z"
        fill={fill}
      />
    </svg>
  )
}

export default OnDemandIcon
