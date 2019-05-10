import styled from 'styled-components'
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
  padding-top: 30px;
  padding-bottom: 30px;

  justify-content: space-between;

  ${media.tablet`
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
  `};
`

export const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  ${media.tabletMax`
    justify-content: center;
  `};
`

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const SocialLink = styled.a`
  display: block;
  border: none;
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
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid ${theme.colors.lightGrey};
  border-bottom: 1px solid ${theme.colors.lightGrey};

  ${media.tablet`
    padding-top: 40px;
    padding-bottom: 40px;
  `};
`

export const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;

  ${media.tablet`
    padding: 0 20px;
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
  border: none;

  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`

export const SubscribeWrapper = styled.div`
  ${media.tabletMax`
    text-align: center;
  `};
`

export const SubscribeLink = styled.a`
  color: ${theme.colors.indigo};
  font-family: ${theme.fonts.title};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.indigo};
  transition: border-color 0.15s linear, color 0.15s linear;

  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
    border-color: ${theme.colors.eucalyptusGreen};
  }

  ${media.tablet`
    margin-left: auto;
  `};

  ${media.desktopMax`
    font-size: 0.9375rem;
  `};
`

export const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const SponsorsCTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  ${media.tablet`
    padding-top: 40px;
  `};
`

export const SponsorImgWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33.3333%;
  max-width: 122px;

  ${media.tablet`
    flex-basis: 16.6667%;
    max-width: 16.6667%;
  `};

  ${media.desktopHD`
    flex-basis: 12.5%;
    max-width: 12.5%;
  `};

  img {
    max-height: 80px;
    max-width: 100%;
    height: auto;
    width: auto;
    align-self: center;
    margin: 0 auto;
    flex-shrink: 0; /* needed to stop images stretching on IE11 */
  }
`

export const LegalSection = styled(Column)`
  padding-top: 30px;
  padding-bottom: 30px;

  ${media.tablet`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
  `};
`
export const LegalStrapline = styled.p`
  color: ${theme.colors.darkGrey};
  font-size: 0.875rem;
  margin-bottom: 0;

  ${media.tabletMax`
    text-align: center;
  `};
`

export const LegalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
  display: flex;
  align-self: baseline;

  ${media.tabletMax`
    justify-content: center;
    margin: 0 0 20px 0;
    flex-wrap: wrap;
  `};
`

export const LegalListItem = styled.li`
  position: relative;
  &:not(:first-child) {
    a {
      padding-left: 20px;
    }
  }
  &:not(:last-child) {
    &:after {
      content: '|';
      color: ${theme.colors.darkGrey};
      position: absolute;
      right: 0;
      top: 0;
    }

    a {
      padding-right: 20px;
    }
  }
`

export const LegalLink = styled(Link)`
  color: ${theme.colors.darkGrey};
  display: block;
  white-space: nowrap;
  font-size: 0.875rem;
  border: none;
  text-decoration: underline;
`
