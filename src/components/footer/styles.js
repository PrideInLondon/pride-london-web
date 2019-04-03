import styled from 'styled-components'
// import { darken, rgba } from 'polished'
import Link from 'gatsby-link'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { Column } from '../grid'

export const FooterWrapper = styled.div`
  background-color: ${theme.colors.white};
`

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.white};
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`

export const SponsorsHeading = styled.h3`
  margin-top: 0;
  text-align: center;
`

export const SocialSection = styled(Column)`
  padding-top: 40px;
  padding-bottom: 40px;

  justify-content: space-between;

  ${media.tablet`
    display: flex;
  `};
`

export const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  ${media.tabletMax`
    justify-content: center;
    margin: 0 0 20px 0;
  `};
`

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const SocialLink = styled.a`
  display: block;

  svg {
    path {
      fill: ${theme.colors.indigo};
      transition: fill 0.15s linear;
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`

export const SponsorsSection = styled(Column)`
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid ${theme.colors.lightGrey};
`

export const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${media.tabletMax`
    margin-bottom: 20px;
  `};

  ${media.desktopMax`
    font-size: 0.9375rem;
  `};
`

export const HashTag = styled.a`
  font-family: ${theme.fonts.title};
  font-weight: 700;
  color: ${theme.colors.indigo};
  text-decoration: none;
  transition: color 0.15s linear;

  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const EventsCTAWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.tablet`
    justify-content: flex-end;
  `};
`

export const EventsCTALink = styled(Link)`
  color: ${theme.colors.indigo};
  font-family: ${theme.fonts.title};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.indigo};
  align-self: baseline;
  transition: border-color 0.15s linear;

  &:hover,
  &:focus {
    border-color: transparent;
  }

  ${media.desktopMax`
    font-size: 0.9375rem;
  `};
`
