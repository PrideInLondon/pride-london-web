import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Download = ({
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
      d="M17 3c-4.476 0-8.46 2.844-9.57 6.857h-.18C4.354 9.857 2 12 2 15s1.75 5 5 5h4v-2H7c-1.93 0-3.015-.987-3.005-3 .01-2.013 1.326-3.429 3.255-3.429h.875c.42 0 .783-.293.857-.698C9.67 7.305 13.111 5 17 5c4.34 0 7.75 3.175 7.75 7.429 0 .473.39.857.875.857 1.375 0 2.382 1.296 2.382 2.714s-.934 2-2.382 2H21v2h4c3.25 0 5-1.857 5-4 0-2.08-1.523-3.963-3.535-4.349C26.063 6.815 22.04 3 17 3z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      fillRule="evenodd"
      d="M15 26.586V12h2v14.586l5.293-5.293 1.414 1.414L16 30.414l-7.707-7.707 1.414-1.414L15 26.586z"
      clipRule="evenodd"
    />
  </svg>
)

export default Download
