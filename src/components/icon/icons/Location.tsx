import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Location = ({
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
      d="M16 4c-4.152 0-9 2.397-9 9.153 0 6.548 7.84 14.193 8.174 14.515.229.222.527.332.826.332.3 0 .597-.11.827-.332C17.16 27.347 25 19.701 25 13.153 25 6.397 20.152 4 16 4zm0 22c-2.06-2.201-7.041-8.012-7.041-12.74C8.959 6.525 14.348 6 16 6c1.652 0 7.041.524 7.041 7.26 0 4.72-4.982 10.537-7.042 12.74zm-5-13c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      d="M16 16.103c-1.71 0-3.102-1.392-3.102-3.103 0-1.71 1.391-3.103 3.102-3.103 1.711 0 3.103 1.392 3.103 3.103 0 1.711-1.392 3.103-3.103 3.103z"
    />
  </svg>
)

export default Location
