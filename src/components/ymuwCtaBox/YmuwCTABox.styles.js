import styled from 'styled-components'
import { mediaQueries } from '../../theme/mediaQueries'
import theme from '../../theme/theme'
import { Column } from '../grid'

export const CTAWrapper = styled.div`
  background-color: ${theme.colors.white};
`

export const CTAPanel = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.indigo};
  margin: auto;
  border: solid 2px ${theme.colors.indigo};
  ${mediaQueries.sm} {
    width: 100%;
    min-height: 12.875rem;
    padding: 1.5rem;
  }
  ${mediaQueries.md}, ${mediaQueries.lg} {
    display: flex;
    width: 95%;
    min-height: 8rem;
    padding: 2.25rem 2.5rem 1.5rem 2.5rem;
  }
`

export const CTATitle = styled.h1`
  color: ${theme.colors.indigo};
  font-family: ${theme.fonts.cactus};
  text-transform: uppercase;
  ${mediaQueries.sm} {
    width: 60%;
    margin-bottom: 1.5rem;
    font-size: 2.4375rem;
  }
  ${mediaQueries.md} {
    font-size: 2.4375rem;
    margin: 0;
  }
  ${mediaQueries.lg} {
    font-size: 3.5625rem;
    margin: 0;
  }
`

export const RelativeColumn = styled(Column)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`
