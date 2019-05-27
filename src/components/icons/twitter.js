import React from 'react'
import PropTypes from 'prop-types'

const Twitter = ({ width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 24"
  >
    <path
      fill={fill}
      fillRule="nonzero"
      d="M9.424 23.303c11.32 0 17.515-8.968 17.515-16.732 0-.252 0-.504-.012-.757 1.2-.825 2.245-1.869 3.073-3.05-1.104.47-2.293.78-3.541.929A5.973 5.973 0 0 0 29.172.436a12.6 12.6 0 0 1-3.914 1.422A6.282 6.282 0 0 0 20.768 0c-3.397 0-6.158 2.638-6.158 5.883 0 .459.06.906.156 1.342-5.114-.241-9.652-2.592-12.69-6.147a5.681 5.681 0 0 0-.828 2.959c0 2.041 1.093 3.841 2.738 4.896A6.45 6.45 0 0 1 1.2 8.2v.08c0 2.844 2.125 5.23 4.934 5.768a6.266 6.266 0 0 1-1.62.207c-.396 0-.78-.035-1.153-.104.78 2.34 3.062 4.037 5.75 4.083a12.718 12.718 0 0 1-7.646 2.523c-.493 0-.985-.023-1.465-.08a18.112 18.112 0 0 0 9.424 2.626"
    />
  </svg>
)

Twitter.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Twitter.defaultProps = {
  width: 30,
  height: 24,
  fill: '#2CDA9D',
}

export default Twitter
