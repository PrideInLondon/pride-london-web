import styled from 'styled-components'
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
import FlipMove from 'react-flip-move'
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

export const FlexColumn = styled(Column)`
  display: block;
  ${mediaQueries.md} {
    display: flex;
  }
`

export const StyledFlipMove = styled(FlipMove)`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

export const GreyWrapper = styled.div`
  background-color: ${colors.lightGrey};
`
