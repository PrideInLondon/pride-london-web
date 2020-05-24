import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Email = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill={secondary} d="M26.5 10.5h-21V12L16 19l10.5-7v-1.5z" />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M17.002 3h-2v4h2V3zm6 1h-2v3h2V4zM4 9v19h24.001V9H4zm5.11 4.179h.001c2.296 1.609 4.592 3.217 6.89 4.821L26 11H6l3.104 2.175h.002l.002.002.002.002zM6 26h20V13l-9.998 7c-2.299-1.604-4.595-3.212-6.89-4.82l-.002-.001-.002-.002L6 13v13zM9.002 4h2v3h-2V4z"
      clipRule="evenodd"
    />
  </svg>
)

export default Email
