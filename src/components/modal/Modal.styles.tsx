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

export const Background = styled.div`
  background-color: ${colors.white};
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`
export const ModalCard = styled.div<LayoutProps>`
  z-index: 1;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${layout}
`

export const ModalBody = styled(animated.div)<SpaceProps>`
  background-color: ${colors.indigo};
  ${space}
`

export const ModalWrapper = styled(({ children, zIndex, ...props }) => (
  <animated.div {...props}>{children}</animated.div>
))<ZIndexProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
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
