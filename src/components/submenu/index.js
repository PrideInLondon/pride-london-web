import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
// import { Link } from 'gatsby'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../grid'

const SubmenuPanel = styled.div`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  color: ${theme.colors.white};

  ${media.tablet`
    position: absolute;
    width: 100%;
    left: 0;
    top: 100px;
  `};
`

const SubmenuPanelTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.white};
  margin-top: 0;
`

const Submenu = props => {
  const {
    item: { title, desc },
  } = props
  return (
    <SubmenuPanel>
      <Container>
        <Row>
          <Column>
            <SubmenuPanelTitle>{title}</SubmenuPanelTitle>
            <p>{desc}</p>
            <ul>
              <li>Hello</li>
            </ul>
          </Column>
        </Row>
      </Container>
    </SubmenuPanel>
  )
}

Submenu.PropTypes = {}

Submenu.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    submenu: PropTypes.array,
  }).isRequired,
}

export default Submenu
