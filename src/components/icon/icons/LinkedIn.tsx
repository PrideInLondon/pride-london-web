import React from 'react'
import { InternalIconProps } from '../Icon.types'

const LinkedIn = ({ colors: { primary }, ...props }: InternalIconProps) => (
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
      d="M12.941 21.655h-2.715v-8.171h2.715v8.17zM22.734 21.655H20.02v-4.372c0-1.098-.393-1.847-1.376-1.847-.75 0-1.197.505-1.393.993-.072.175-.09.419-.09.663v4.563h-2.716s.036-7.404 0-8.17h2.716v1.157c.36-.557 1.006-1.35 2.448-1.35 1.787 0 3.127 1.168 3.127 3.678v4.685zM11.584 12.369h-.018c-.911 0-1.5-.628-1.5-1.413 0-.8.607-1.411 1.536-1.411s1.5.61 1.518 1.411c0 .785-.59 1.413-1.536 1.413z"
      clipRule="evenodd"
    />
  </svg>
)

export default LinkedIn
