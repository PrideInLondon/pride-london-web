import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import Link from 'gatsby-link'
import { Column } from '../grid/'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  margin: 0 10px 0 10px;
  font-family: 'Poppins';
  text-decoration: none;
`

StyledLink.displayName = 'LinkTest'
const StyledButton = styled(Link)`
  width: 138px;
  height: 40px;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  background-color: ${props => props.theme.colors.eucalyptusGreen};
`
StyledButton.displayName = 'ButtonTest'

const NavItems = props => {
  const { listItems, logo } = props.items

  return (
    <Fragment>
      <Column flex={3} alignItems="center" justifyContent="center">
        <img src={logo} alt="" />
      </Column>
      {listItems.map(items => (
        <Column key={shortid.generate()}>
          <StyledLink to="#">{items}</StyledLink>
        </Column>
      ))}
      <Column>
        <StyledButton to="/">Donate</StyledButton>
      </Column>
    </Fragment>
  )
}

NavItems.propTypes = {
  items: PropTypes.object,
}

NavItems.defaultProps = {
  items: {},
}

export default NavItems
