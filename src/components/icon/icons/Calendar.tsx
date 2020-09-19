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
      fill={primary}
      fillRule="evenodd"
      d="M4 28h24V7h-5V4h-2v3H11V4H9v3H4v21zm2-2h20V16H6v10z"
      clipRule="evenodd"
    />
    <path fill={secondary} d="M6 14h20V9h-3v2.5h-2V9H11v2.5H9V9H6v5z" />
  </svg>
)

export default Calendar
