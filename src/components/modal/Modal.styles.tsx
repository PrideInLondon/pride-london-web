import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring/web.cjs'
import {
  LayoutProps,
  SpaceProps,
  ZIndexProps,
  layout,
  space,
  zIndex,
} from 'styled-system'
import { colors } from '../../theme/colors'
import { space as spacing } from '../../theme/space'
import { usePickedProps } from '../../hooks/usePickedProps'
import backgroundImg from './navy-background.jpg'

export const Background = styled.div`
  background-color: ${colors.white};
  position: absolute;
  opacity: 0.95;
  width: 100%;
  height: 100%;
`
export const ModalCard = styled.div<LayoutProps>`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${layout}
`

export const ModalBody = styled(({ children, ...props }) => {
  const spaceProps = usePickedProps(props, space.propNames ?? [])
  return <animated.div {...spaceProps[1]}>{children}</animated.div>
})<SpaceProps>`
  background-color: ${colors.indigo};
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${colors.white};
  width: 100%;
  height: 100%;
  ${space}
`

export const ModalWrapper = styled(
  ({ children, zIndex: zIndexStyleProp, ...props }) => (
    <animated.div {...props}>{children}</animated.div>
  )
)<ZIndexProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: ${spacing.xxl_mob} ${spacing.lg};
  ${zIndex}

  *,
    *:before,
    *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
`

ModalWrapper.defaultProps = {
  zIndex: 9999,
}
