import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Search = ({
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
      d="M13 20c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 2c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
      clipRule="evenodd"
    />
    <path
      fill={primary}
      d="M21 20l6.364 6.364-1.414 1.414-6.364-6.364L21 20z"
    />
    <path
      fill={secondary}
      fillRule="evenodd"
      d="M13 18c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z"
      clipRule="evenodd"
    />
  </svg>
)

export default Search
