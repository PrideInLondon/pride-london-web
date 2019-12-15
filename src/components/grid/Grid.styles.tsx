import styled from 'styled-components'
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
} from 'styled-system'
import FlipMove from 'react-flip-move'
import { mediaQueries } from '../../theme/mediaQueries'
import { xl } from '../../theme/breakpoints'
import { colors } from '../../theme/colors'

export const Column = styled.div<SpaceProps & FlexboxProps & LayoutProps>`
  ${mediaQueries.sm} {
    padding: 10px 5px;
  }

  ${mediaQueries.md} {
    padding: 10px;
  }

  ${mediaQueries.xl} {
    padding: 10px 15px;
  }

  && {
    ${space}
  }
  ${flexbox}
  ${layout}
`
export const Row = styled.div<SpaceProps & FlexboxProps & LayoutProps>`
  ${mediaQueries.sm} {
    margin-left: 5px;
    margin-right: 5px;
  }

  ${mediaQueries.md} {
    margin-left: 10px;
    margin-right: 10px;
  }

  ${mediaQueries.lg} {
    margin-left: 40px;
    margin-right: 40px;
  }

  ${mediaQueries.xl} {
    margin-left: 40px;
    margin-right: 40px;
  }
  && {
    ${space}
  }
  ${flexbox}
  ${layout}
`
Row.defaultProps = {
  display: 'flex',
}

export const Container = styled.div<SpaceProps & FlexboxProps & LayoutProps>`
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
