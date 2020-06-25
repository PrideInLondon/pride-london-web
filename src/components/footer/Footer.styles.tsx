import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import { colors } from '../../theme/colors'
import { xs, sm, md, lg, xl_mob, xl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { Divider } from '../divider'
import { P } from '../typography'
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

  ${mediaQueries.md} {
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

  ${mediaQueries.md} {
    margin: 0;
  }
`

export const Hashtag = styled.a`
  font-weight: bold;
  color: ${colors.indigo};
  text-decoration: none;
  transition: color 0.15s linear;

  :hover,
  :focus {
    color: ${colors.eucalyptusGreen};
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
  max-width: 150px;
  min-height: 70px;
  padding: ${xs}px;

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
  max-height: 100%;
  max-width: 100%;
  align-self: center;
  margin: 0 auto;
  filter: grayscale(100%);
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

export const LegalLinksContainer = styled.div``

export const LegalLink = styled(props => (
  <P variant="sm" as={Link} {...props} />
))`
  text-decoration: none;

  :not(:last-child):after {
    content: '|';
    padding: 0 15px;
    cursor: default;
  }
`
