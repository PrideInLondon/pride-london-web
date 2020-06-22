import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Calendar = ({
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
      fill={secondary}
      d="M16 29c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
    />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M9.07 25H4V4h5V1h2v3h10V1h2v3h5v21h-5.07c-.486 3.392-3.404 6-6.93 6-3.527 0-6.444-2.608-6.93-6zm0-2H6V13h20v10h-3.07c-.486-3.392-3.404-6-6.93-6-3.527 0-6.444 2.608-6.93 6zm2.03 0c-.066.323-.1.657-.1 1 0 .343.034.677.1 1 .463 2.282 2.481 4 4.9 4 2.419 0 4.437-1.718 4.9-4 .066-.323.1-.657.1-1 0-.343-.034-.677-.1-1-.463-2.282-2.481-4-4.9-4-2.419 0-4.437 1.718-4.9 4zM6 11h20V6h-3v2.5h-2V6H11v2.5H9V6H6v5z"
      clipRule="evenodd"
    />
    <path fill={primary} d="M17 23h2v2h-4v-4h2v2z" />
  </svg>
)

export default Calendar
