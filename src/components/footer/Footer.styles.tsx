import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Divider } from '../divider'
import { P } from '../typography'
import { colors } from '../../theme/colors'
import { sm, md, lg, xl_mob, xl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fontSizes } from '../../theme/fonts'
import background from './background.jpg'

export const Wrapper = styled.footer.attrs({ padding: 'xl' })`
  display: flex;
  background-image: url(${background});
  background-size: cover;
  width: 100%;

  ${space}
`

export const Content = styled.div.attrs({ padding: 'xl' })`
  background-color: ${colors.white};
  width: 100%;

  ${space}
`

export const UpperWrapper = styled.div`
  display: block;

  ${mediaQueries.lg} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SocialContainer = styled.div`
  font-size: 2rem;

  > * {
    margin-left: ${sm}px;
  }

  > :first-child {
    margin-left: 0;
  }
`

export const Social = styled.a`
  text-decoration: none;
`

export const HashtagContainer = styled.div`
  margin: ${lg}px 0;

  > * {
    margin-right: ${md}px;
  }

  > :last-child {
    margin-right: 0;
  }

  ${mediaQueries.lg} {
    margin: 0;
  }
`

export const Hashtag = styled.a`
  font-weight: bold;
  font-size: ${fontSizes.body_md};
  color: ${colors.indigo};
  text-decoration: none;
  transition: color 0.15s linear;

  :hover,
  :focus {
    color: ${colors.eucalyptusGreen};
  }

  ${mediaQueries.md} {
    font-size: ${fontSizes.body_lg};
  }
`

export const StyledDivider = () => (
  <Divider marginY={{ default: `${xl_mob}px`, md: `${xl}px` }} />
)

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 33.3333%; /* 1 of 3 */

  ${mediaQueries.sm} {
    padding: ${sm}px;
  }

  ${mediaQueries.md} {
    min-height: 100px;
    flex-basis: 16.6667%; /* 1 of 6 */
    max-width: 16.6667%;
  }

  ${mediaQueries.lg} {
    flex-basis: 12.5%; /* 1 of 8*/
    max-width: 12.5%;
  }
`

export const Logo = styled.a`
  text-decoration: none;
`

export const LogoImage = styled.img`
  object-fit: contain;
  max-height: 80%;
  max-width: 80%;
  align-self: center;
  margin: 0 auto;
  flex-shrink: 0; /* needed to stop images stretching on IE11 */
`

export const PartnersLinksContainer = styled.div`
  margin-top: ${lg}px;

  > * {
    margin-bottom: ${sm}px;
  }

  > :first-child {
    margin-right: ${lg}px;
  }

  ${mediaQueries.md} {
    margin-top: ${xl}px;
  }
`

export const LegalContainer = styled.div`
  display: block;
  width: 100%;

  > * {
    width: 100%;

    :not(:last-child) {
      margin-bottom: ${md}px;
    }
  }

  ${mediaQueries.md} {
    display: flex;

    > * {
      width: 50%;
    }
  }
`

export const LegalLinksContainer = styled.div`
  text-align: right;
`

export const LegalLink = styled(({ component, ...props }) => (
  <P variant="sm" as={component} {...props} />
))`
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  color: ${colors.indigo};
  padding: 0;

  :not(:last-child):after {
    content: '|';
    padding: 0 15px;
    cursor: default;
  }
`
