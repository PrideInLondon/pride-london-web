import React from 'react'
import { InternalIconProps } from '../Icon.types'

const YouTube = ({ colors: { primary }, ...props }: InternalIconProps) => (
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
      d="M21.403 12.597c.36.345.477 1.129.477 1.129s.12.92.12 1.84v.864c0 .92-.12 1.84-.12 1.84s-.117.784-.477 1.13c-.411.408-.867.45-1.125.474l-.077.007C18.52 19.996 16 20 16 20s-3.12-.027-4.08-.114c-.046-.008-.1-.015-.163-.022-.304-.034-.781-.089-1.16-.465-.36-.345-.477-1.129-.477-1.129s-.12-.92-.12-1.84v-.864c0-.92.12-1.84.12-1.84s.117-.784.477-1.13c.412-.408.868-.45 1.126-.473l.076-.008C13.48 12 15.997 12 15.997 12h.006s2.518 0 4.198.115l.076.008c.258.023.714.065 1.126.474zm-6.642 1.682v3.196l3.242-1.592-3.242-1.604z"
      clipRule="evenodd"
    />
  </svg>
)

export default YouTube
