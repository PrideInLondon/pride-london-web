import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header'

Header.displayName = 'Header'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      isHovered: false,
    }
  }

  render() {
    return <Header {...this.props}>{this.props.children}</Header>
  }
}

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  items: PropTypes.shape({
    logo: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.objectOf(PropTypes.string),
    cta: PropTypes.string,
  }).isRequired,
}

Navigation.defaultProps = {
  children: null,
  items: {},
}

export default Navigation
