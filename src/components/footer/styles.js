import styled from 'styled-components'
import { darken, rgba } from 'polished'
import theme from '../../theme/theme'
import { media } from '../../theme/media'

export const FooterWrapper = styled.div`
  background-color: ${theme.colors.indigo};
`

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.indigo};
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`

export const Heading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 0 0 1.25rem 0;
  color: ${theme.colors.white};

  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
  `};
`

export const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    justify-content: left;
    height: 58px;
  `};
`

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const SocialLink = styled.a`
  &:hover,
  &:focus {
    svg {
      path {
        transition: fill 0.15s linear;
        fill: ${darken(0.1, theme.colors.eucalyptusGreen)};
      }
    }
  }
`
export const Small = styled.small`
  padding-top: 30px;
  border-top: 1px solid ${rgba(theme.colors.white, 0.3)};
  display: block;
  font-size: 0.75rem;
  color: ${theme.colors.white};

  ${media.tablet`
    margin-top: 40px;
  `};
`
