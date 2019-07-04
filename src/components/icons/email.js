import React from 'react'
import PropTypes from 'prop-types'

const Email = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <g fill="none" fillRule="evenodd">
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        d="M.72 24.994h28.575V5H.72z"
      />
      <path fill="#2CDA9D" d="M2.212 5l13.538 8.357L29.288 5z" />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        d="M.72 5l14.287 8.569L29.295 5z"
      />
    </g>
  </svg>
)

Email.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Email.defaultProps = {
  width: 30,
  height: 30,
  fill: '#2CDA9D',
}

export default Email
