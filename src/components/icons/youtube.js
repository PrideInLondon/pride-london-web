import React from 'react'
import PropTypes from 'prop-types'

const Youtube = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 22"
  >
    <path
      fill="#2CDA9D"
      fillRule="evenodd"
      d="M11.932 15.057V6.12l7.84 4.47-7.84 4.468zm17.441-11.75A3.773 3.773 0 0 0 26.721.632C24.38 0 15 0 15 0S5.619 0 3.28.632A3.773 3.773 0 0 0 .626 3.307C0 5.666 0 10.588 0 10.588s0 4.922.627 7.282a3.773 3.773 0 0 0 2.652 2.674c2.34.632 11.721.632 11.721.632s9.381 0 11.72-.632a3.773 3.773 0 0 0 2.653-2.674C30 15.51 30 10.588 30 10.588s0-4.922-.627-7.281z"
    />
  </svg>
)

Youtube.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

Youtube.defaultProps = {
  width: 30,
  height: 22,
}

export default Youtube
