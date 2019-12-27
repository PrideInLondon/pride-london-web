import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from 'styled-system'
import { mediaQueries } from '../../theme/mediaQueries'
import { xl } from '../../theme/breakpoints'
import { colors } from '../../theme/colors'

interface GridProps
  extends SpaceProps,
    FlexboxProps,
    LayoutProps,
    PositionProps {}
// eslint-disable-next-line no-unexpected-multiline
export const Column = styled.div<GridProps>`
  padding: 10px 5px;
  
  ${mediaQueries.sm} {
    padding: 10px;
  }

  ${mediaQueries.lg} {
    padding: 10px 15px;
  }

  && {
    ${space}
  }
  ${position}
  ${flexbox}
  ${layout}
`
// eslint-disable-next-line no-unexpected-multiline
export const Row = styled.div<GridProps>`
  margin-left: 5px;
  margin-right: 5px;
  
  ${mediaQueries.sm} {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${mediaQueries.md} {
    margin-left: 40px;
    margin-right: 40px;
  }

  ${mediaQueries.lg} {
    margin-left: 75px;
    margin-right: 75px;
  }
  
  && {
    ${space}
  }
  ${flexbox}
  ${layout}
  ${position}
`
Row.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
}

export const Container = styled.div<GridProps>`
  ${mediaQueries.sm} {
    min-width: 335px;
  }

  ${mediaQueries.md} {
    min-width: 668px;
  }

  ${mediaQueries.lg} {
    min-width: 960px;
  }

  ${mediaQueries.xl} {
    min-width: 1260px;
    max-width: ${xl}px;
  }

  ${space}
  ${flexbox}
  ${layout}
`
Container.defaultProps = {
  mx: 'auto',
}

const keyFrame = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: '';
    opacity: '';
  }
`
// styled componets V4 requeries css helper func for keyframes
const keyFrameHelper = css`
  animation: ${keyFrame} 360ms ease;
`
type FlexColumnProps = {
  animation: boolean
  children: object
}
export const FlexColumn = ({
  animation,
  children,
  ...props
}: FlexColumnProps) => {
  const FlexInternal = styled(Column)`
    display: block;
    ${animation ? keyFrameHelper : ''}
    ${mediaQueries.md} {
      display: flex;
    }
  `
  return <FlexInternal {...props}>{children}</FlexInternal>
}

export const GreyWrapper = styled.div`
  background-color: ${colors.lightGrey};
`
