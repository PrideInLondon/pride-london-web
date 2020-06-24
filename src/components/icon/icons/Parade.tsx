import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Parade = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={primary}
      fillRule="evenodd"
      d="M22.697 17l2.857-5H15v10h10.554l-2.857-5zM29 24H13V10h16l-4 7 4 7z"
      clipRule="evenodd"
    />
    <path fill={secondary} d="M5 20h16V6H5v14z" />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M21 20H5V6h16v14zM19 8H7v10h12V8z"
      clipRule="evenodd"
    />
    <path fill={primary} d="M5 4H7V28H5z" />
  </svg>
)

export default Parade
