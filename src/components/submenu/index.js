import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Container, Row, Column } from '../grid'
import { checkBreakpoint } from '../../utilities'

const Panel = styled.div`
  background-color: ${lighten(0.05, theme.colors.indigo)};
  color: ${theme.colors.white};

  ${media.nav`
    position: absolute;
    width: 100%;
    left: 0;
    top: 100px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    padding: 60px 0;
    height: auto !important;
  `};

  @media (max-width: ${theme.breakpoints[1] - 1}px) {
    overflow: hidden;
    transition: height 0.15s linear;
    height: 0;
  }
`

const PanelRow = styled(Row)`
  flex-wrap: nowrap;
  @media (max-width: ${theme.breakpoints[1] - 1}px) {
    margin: 0;
  }
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

  ${media.nav`
    display: block;
  `};
`

const PanelListWrapper = styled(Column)`
  ${media.nav`
    padding-left: 40px;
    column-count: 2;

    & > * {
        align-self: stretch;
    }
  `};

  @media (max-width: ${theme.breakpoints[1] - 1}px) {
    padding: 20px;
    width: 100%;
  }
`

const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`

const PanelListSection = styled.div`
  ${media.nav`
    page-break-inside: avoid;
    break-inside: avoid;
    column-gap: 40px;
  `};

  @media (max-width: ${theme.breakpoints[1] - 1}px) {
    &:last-child {
      ul {
        margin-bottom: 0;
      }
    }
  }
`

const Heading = styled.h2`
  color: ${theme.colors.eucalyptusGreen};
  font-size: 1rem;
  margin: 0 0 0.5em 0;
  line-height: 1.25;

  ${media.nav`
    margin: 0 0 0.2em 0;
  `};
`

const PanelLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.title};
  font-size: 1.125rem;
  padding: 15px 0;
  display: block;

  ${media.nav`
    padding: 5px 0;
    font-size: 1.25rem;
  `};

  span {
    position: relative;
    &:after {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: transparent;
      transition: background-color 0.15s linear;
    }
  }

  &:hover,
  &:focus {
    span {
      &:after {
        background-color: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`

function setHeightAuto(ref) {
  if (ref.current.offsetHeight > 0 && !checkBreakpoint(theme.breakpoints[1])) {
    ref.current.style.height = 'auto'
  }
}

const Submenu = props => {
  const {
    item: { title, desc, id, submenu },
    isOpen,
  } = props

  const panelRef = useRef()
  const containerRef = useRef()

  useLayoutEffect(() => {
    if (!checkBreakpoint(theme.breakpoints[1])) {
      panelRef.current.style.height = `${containerRef.current.offsetHeight}px`
      if (!isOpen) {
        // Set timeout forces allows the height to be transitioned.
        setTimeout(() => {
          panelRef.current.style.height = '0'
        })
      }
    }
  }, [isOpen])

  return (
    <Panel
      id={id}
      isOpen={isOpen}
      containerRef={containerRef}
      ref={panelRef}
      onTransitionEnd={() => setHeightAuto(panelRef)}
    >
      <Container ref={containerRef}>
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
          <PanelListWrapper isOpen={isOpen}>
            {submenu.map(submenuList => (
              <PanelListSection key={submenuList.heading}>
                <Heading>{submenuList.heading}</Heading>
                <PanelList>
                  {submenuList.links.map(link => (
                    <li key={link.title}>
                      <PanelLink to={link.url}>
                        <span>{link.title}</span>
                      </PanelLink>
                    </li>
                  ))}
                </PanelList>
              </PanelListSection>
            ))}
          </PanelListWrapper>
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
