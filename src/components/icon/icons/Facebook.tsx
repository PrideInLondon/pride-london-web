import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Facebook = ({ colors: { primary }, ...props }: InternalIconProps) => (
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
      d="M14.526 22v-6H13v-2.001h1.526V12.69c0-1.687.75-2.69 2.883-2.69h1.578v2.007h-1.346c-.516-.007-.891.326-.885.683.006.357-.003 1.309-.003 1.309H19l-.235 2h-2.012V22h-2.227z"
    />
  </svg>
)

export default Facebook
