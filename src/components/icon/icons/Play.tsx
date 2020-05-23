import React from 'react'
import { InternalIconProps } from '../Icon.types'
import { colors } from '../../../theme/colors'

const Play = ({ colors: { primary }, ...props }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={primary}
      fillRule="evenodd"
      d="M4 16C4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 12-12 12S4 22.6 4 16zM16 6C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6z"
      clipRule="evenodd"
    />
    <path
      fill={colors.eucalyptusGreen}
      fillRule="evenodd"
      d="M19 16l-4 3v-6l4 3z"
      clipRule="evenodd"
    />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M22.333 16L13 23V9l9.333 7zM15 13v6l4-3-4-3z"
      clipRule="evenodd"
    />
  </svg>
)

export default Play
