import React from 'react'

const LiveIcon = ({ size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
  >
    <path fill="#fff" d="M0 0h32v32H0V0z" />
    <circle cx="16" cy="16" r="8" fill="#2CDA9D" />
    <circle cx="16" cy="16" r="6" fill="#2D2F7F" />
  </svg>
)

export default LiveIcon
