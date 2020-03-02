import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import theme from '../../theme/theme'
import { Container } from '../../components/grid'
import { checkBreakpoint } from '../../utils/style-utils'
import { handleUrl } from '../../utils/location-utils'
import {
  Panel,
  PanelRow,
  PanelTitle,
  PanelInfoWrapper,
  PanelListWrapper,
  PanelList,
  PanelListSection,
  Heading,
  PanelLink,
} from './SubMenu.styles'

function setHeightAuto(ref) {
  if (ref.current.offsetHeight > 0 && !checkBreakpoint(theme.navBreakpoint)) {
    ref.current.style.height = 'auto'
  }
}

const SubMenu = props => {
  const {
    item: { title, desc, id, submenu },
    isOpen,
    setNavOpen,
    setNavItemOpen,
  } = props

  const panelRef = useRef()
  const containerRef = useRef()

  useLayoutEffect(() => {
    if (!checkBreakpoint(theme.navBreakpoint)) {
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
              <PanelListSection key={submenuList.heading || shortid.generate()}>
                {submenuList.heading && (
                  <Heading>{submenuList.heading}</Heading>
                )}
                <PanelList>
                  {submenuList.links.map(link => (
                    <li key={link.title}>
                      <PanelLink
                        {...handleUrl(link.url)}
                        itemProp="url"
                        onClick={() =>
                          checkBreakpoint(theme.navBreakpoint)
                            ? setNavItemOpen({ type: 'close' })
                            : setNavOpen(false)
                        }
                      >
                        <span itemProp="name">{link.title}</span>
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

SubMenu.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    desc: PropTypes.string,
    submenu: PropTypes.array,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  setNavOpen: PropTypes.func.isRequired,
  setNavItemOpen: PropTypes.func.isRequired,
}

export default SubMenu
