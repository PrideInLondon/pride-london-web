import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Live = ({ colors: { primary } }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <circle cx="16" cy="16" r="8" fill="#2CDA9D" />
    <circle cx="16" cy="16" r="6" fill={primary} />
  </svg>
)

export default Live
