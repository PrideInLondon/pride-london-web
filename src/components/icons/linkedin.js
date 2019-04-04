import React from 'react'
import PropTypes from 'prop-types'

const Linkedin = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <path
      fill="#2CDA9D"
      fillRule="evenodd"
      d="M25.562 25.563h-4.446V18.6c0-1.66-.032-3.796-2.312-3.796-2.316 0-2.67 1.808-2.67 3.676v7.082h-4.443V11.247h4.264v1.956h.062c.593-1.126 2.046-2.312 4.21-2.312 4.502 0 5.335 2.964 5.335 6.82v7.852zM6.674 9.289a2.579 2.579 0 1 1 0-5.16 2.58 2.58 0 0 1 0 5.159zM4.446 25.563H8.9V11.247H4.446v14.316zM27.778 0H2.212C.992 0 0 .968 0 2.162v25.672C0 29.03.992 30 2.212 30h25.566C29 30 30 29.03 30 27.834V2.162C30 .968 29 0 27.778 0z"
    />
  </svg>
)

Linkedin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

Linkedin.defaultProps = {
  width: 30,
  height: 30,
}

export default Linkedin
