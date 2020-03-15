import React from 'react'
import PropTypes from 'prop-types'
import { ArrowContainer } from './Arrow.styles'

const Arrow = ({ left, children, onClick }) => {
  return (
    <ArrowContainer type="button" onClick={onClick} left={left}>
      {children}
    </ArrowContainer>
  )
}

Arrow.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  onClick: PropTypes.func,
}

Arrow.defaultProps = {
  left: false,
  onClick: () => {},
}

export default Arrow
