import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Website = ({
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
      d="M19.535 2.565l9.9 9.9-7.071 7.07-2.829-2.828 1.414-1.414 1.415 1.414 4.242-4.242-7.07-7.072-4.244 4.243 1.415 1.414-1.415 1.415-2.828-2.829 7.071-7.07zM12.464 29.435l-9.9-9.9 7.071-7.07 2.829 2.828-1.414 1.414-1.415-1.414-4.242 4.243 7.07 7.07 4.243-4.242-1.414-1.414 1.414-1.414 2.829 2.828-7.071 7.071z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      d="M18.121 12.464H20.121V20.464H18.121z"
      transform="rotate(45 18.121 12.464)"
    />
  </svg>
)

export default Website
