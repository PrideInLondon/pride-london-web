import React from 'react'
import PropTypes from 'prop-types'

const Messenger = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 25"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M12.5 0C5.597 0 0 5.182 0 11.574c0 3.643 1.818 6.892 4.658 9.012V25l4.257-2.335c1.135.313 2.34.483 3.585.483 6.903 0 12.5-5.181 12.5-11.574C25 5.182 19.403 0 12.5 0zm1.243 15.586l-3.184-3.394-6.211 3.394 6.832-7.253 3.26 3.395 6.135-3.395-6.832 7.253z"
    />
  </svg>
)

Messenger.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Messenger.defaultProps = {
  width: 30,
  height: 30,
  fill: '#2CDA9D',
}

export default Messenger
