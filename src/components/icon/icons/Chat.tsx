import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Chat = ({
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
      d="M18 8h12v14h-4.091l-5.914 7v-7H11v-8H9.009v5S5.305 14.395 5 14H2V3h16v5zM8 12h2V8l6.007-.007V5.015L4 5v7h2l2 3v-3z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      fillRule="evenodd"
      d="M28 20h-3l-3 4v-4h-9V10h15v10zm-5-8h2v2h-2v-2zm-2 2h-6v-2h6v2z"
      clipRule="evenodd"
    />
  </svg>
)

export default Chat
