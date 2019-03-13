import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../grid'

const Panel = styled.div`
  background-color: ${theme.colors.indigo};
  color: ${theme.colors.white};

  ${media.tablet`
    background-color: ${lighten(0.05, theme.colors.indigo)};
    position: absolute;
    width: 100%;
    left: 0;
    top: 100px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    padding: 60px 0;
  `};
`

const PanelRow = styled(Row)`
  flex-wrap: nowrap;
`

const PanelTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.white};
  margin-top: 0;
`

const PanelInfoWrapper = styled(Column)`
  border-right: 1px solid ${theme.colors.eucalyptusGreen};
  padding-right: 40px;
  display: none;
  ${media.tablet`
    display: block;
  `};
`

const PanelLinksWrapper = styled(Column)`
  ${media.tablet`
    padding-left: 40px;
    column-count: 2;

    & > * {
        align-self: stretch;
    }
  `};
`

const PanelLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`

const PanelLinksSection = styled.div`
  ${media.tablet`
    page-break-inside: avoid;
    break-inside: avoid;
    column-gap: 40px;
  `};
`

const Heading = styled.h2`
  color: ${theme.colors.eucalyptusGreen};
  font-size: 1rem;
  margin: 0 0 0.2em 0;
  line-height: 1.25;
`

const SubmenuLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.title};
  font-size: 1.25rem;
`

const Submenu = props => {
  const {
    item: { title, desc, id, submenu },
    isOpen,
  } = props
  return (
    <Panel id={id} isOpen={isOpen}>
      <Container>
        <PanelRow>
          <PanelInfoWrapper
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1 / 3, // 33% between second breakpoint(768px) and third breakpoint (1024px)
              1 / 4, // 25% between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
          >
            <PanelTitle>{title}</PanelTitle>
            <p>{desc}</p>
          </PanelInfoWrapper>
          <PanelLinksWrapper>
            {submenu.map(submenuList => (
              <PanelLinksSection key={submenuList.heading}>
                <Heading>{submenuList.heading}</Heading>
                <PanelLinksList>
                  {submenuList.links.map(link => (
                    <li key={link.title}>
                      <SubmenuLink to={link.url}>{link.title}</SubmenuLink>
                    </li>
                  ))}
                </PanelLinksList>
              </PanelLinksSection>
            ))}
          </PanelLinksWrapper>
        </PanelRow>
      </Container>
    </Panel>
  )
}

Submenu.PropTypes = {}

Submenu.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    submenu: PropTypes.array,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Submenu
