import React from 'react'

const ChevronRight = props => (
  <svg
    style={{
      display: 'inline-block',
      marginBottom: '-4px',
      marginLeft: '6px',
    }}
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    {...props}
  >
    <path
      d="M2 2l7 7-7 7"
      stroke="#2D2F7F"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronRight
