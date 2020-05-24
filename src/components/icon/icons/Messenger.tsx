import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Messenger = ({ colors: { primary }, ...props }: InternalIconProps) => (
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
      d="M16.596 17.481l-1.528-1.63-2.981 1.63L15.367 14l1.565 1.63L19.876 14l-3.28 3.481zM16 10c-3.314 0-6 2.487-6 5.556 0 1.748.873 3.307 2.236 4.326V22l2.043-1.121c.545.15 1.123.232 1.721.232 3.314 0 6-2.487 6-5.556C22 12.488 19.314 10 16 10z"
      clipRule="evenodd"
    />
  </svg>
)

export default Messenger
