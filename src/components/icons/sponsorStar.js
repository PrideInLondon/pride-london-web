import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/theme'
const SponsorStar = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M14.175 14.784L12.3 18.585a.335.335 0 0 1-.599 0l-1.876-3.8-4.195-.61a.334.334 0 0 1-.185-.57l3.035-2.96-.716-4.177a.333.333 0 0 1 .484-.352L12 8.09l3.752-1.973a.334.334 0 0 1 .484.352l-.716 4.178 3.036 2.959a.334.334 0 0 1-.187.57l-4.194.61zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
    />
  </svg>
)

SponsorStar.propTypes = {
  color: PropTypes.string,
}

SponsorStar.defaultProps = {
  color: theme.colors.gold,
}

export default SponsorStar
