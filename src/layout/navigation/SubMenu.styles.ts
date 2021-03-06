import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'
import theme from '../../theme/theme'
import { mediaQueries } from '../../theme/mediaQueries'

import { Row, Column } from '../../components/grid'

export const Panel = styled.div<{ isOpen: boolean; backgroundColor: string }>(
  ({ isOpen, backgroundColor }) => css`
    color: ${theme.colors.white};

    ${mediaQueries.nav} {
      position: absolute;
      width: 100%;
      left: 0;
      top: 100px;
      display: ${isOpen ? 'block' : 'none'};
      padding: 60px 0;
      height: auto !important;
      background-color: ${darken(0.05, backgroundColor)};
    }

    ${mediaQueries.navMax} {
      overflow: hidden;
      transition: height 0.15s linear;
      height: 0;
      background-color: ${backgroundColor};
    }
  `
)

export const PanelRow = styled(Row)`
  flex-wrap: nowrap;

  ${mediaQueries.navMax} {
    margin: 0;
  }
`

export const PanelTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.white};
  margin-top: 0;
`

export const PanelInfoWrapper = styled(Column)`
  border-right: 1px solid ${theme.colors.eucalyptusGreen};
  padding-right: 40px;
  display: none;
  ${mediaQueries.nav} {
    display: block;
  }
`

export const PanelListWrapper = styled(Column)<{ isOpen: boolean }>`
  ${mediaQueries.nav} {
    padding-left: 40px;
    column-count: 3;
    column-gap: 40px;
    column-width: 250px;

    & > * {
      align-self: stretch;
    }
  }

  ${mediaQueries.navMax} {
    padding: 20px;
    width: 100%;
  }
`

export const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`

export const PanelListSection = styled.div`
  ${mediaQueries.nav} {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  ${mediaQueries.navMax} {
    &:last-child {
      ul {
        margin-bottom: 0;
      }
    }
    page-break-inside: avoid;
    break-inside: avoid;
  }
`

export const Heading = styled.h2`
  color: ${theme.colors.eucalyptusGreen};
  font-size: 1rem;
  margin: 0 0 0.5em 0;
  line-height: 1.25;

  ${mediaQueries.nav} {
    margin: 0 0 0.2em 0;
  }
`

export const PanelLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.title};
  font-size: 1.125rem;
  padding: 15px 0;
  display: block;
  border: none;

  ${mediaQueries.nav} {
    padding: 5px 0;
    font-size: 1.25rem;
  }

  span {
    transition: box-shadow 0.15s linear;
  }
  &:hover,
  &:focus {
    span {
      box-shadow: inset 0 -2px 0 -1px ${theme.colors.eucalyptusGreen};
    }
  }
`
