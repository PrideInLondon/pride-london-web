import React from 'react'
import PropTypes from 'prop-types'

const Facebook = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <path
      fill={fill}
      fillRule="nonzero"
      d="M28.342 0H1.658C.742 0 0 .742 0 1.658v26.684C0 29.258.742 30 1.658 30h14.368V18.421h-3.92v-4.563h3.9v-3.332c0-3.879 2.362-5.99 5.82-5.99a32.71 32.71 0 0 1 3.516.2v4.048h-2.39c-1.878 0-2.241.89-2.241 2.2v2.895h4.5l-.585 4.542h-3.915V30h7.631c.916 0 1.658-.742 1.658-1.658V1.658C30 .742 29.258 0 28.342 0z"
    />
  </svg>
)

Facebook.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Facebook.defaultProps = {
  width: 30,
  height: 30,
  fill: '#2CDA9D',
}

export default Facebook
