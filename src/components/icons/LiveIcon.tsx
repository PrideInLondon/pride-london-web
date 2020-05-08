import React from 'react'
import { colors } from '../../theme/colors'
import { IconProps } from './Icon.types'

const LiveIcon = ({ variant, size = 32 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
  >
    <circle cx="16" cy="16" r="8" fill="#2CDA9D" />
    <circle
      cx="16"
      cy="16"
      r="6"
      fill={{ blue: colors.indigo, white: colors.white }[variant]}
    />
  </svg>
)

export default LiveIcon
