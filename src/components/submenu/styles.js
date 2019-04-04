import styled from 'styled-components'
import { Link } from 'gatsby'
import { lighten } from 'polished'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Row, Column } from '../grid'

export const Panel = styled.div`
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

  ${media.navMax`
    overflow: hidden;
    transition: height 0.15s linear;
    height: 0;
  `};
`

export const PanelRow = styled(Row)`
  flex-wrap: nowrap;

  ${media.navMax`
    margin: 0;
  `};
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

  ${media.nav`
    display: block;
  `};
`

export const PanelListWrapper = styled(Column)`
  ${media.nav`
    padding-left: 40px;
    column-count: 2;
    column-gap: 40px;
    column-width: 250px;

    & > * {
        align-self: stretch;
    }
  `};

  ${media.navMax`
    padding: 20px;
    width: 100%;
  `};
`

export const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
`

export const PanelListSection = styled.div`
  ${media.nav`
    page-break-inside: avoid;
    break-inside: avoid;
  `};

  ${media.navMax`
    &:last-child {
      ul {
        margin-bottom: 0;
      }
    }
  `};
`

export const Heading = styled.h2`
  color: ${theme.colors.eucalyptusGreen};
  font-size: 1rem;
  margin: 0 0 0.5em 0;
  line-height: 1.25;

  ${media.nav`
    margin: 0 0 0.2em 0;
  `};
`

export const PanelLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-family: ${theme.fonts.title};
  font-size: 1.125rem;
  padding: 15px 0;
  display: block;
  border: none;

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
