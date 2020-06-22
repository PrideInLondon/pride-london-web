import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { colors } from '../../theme/colors'
import { sm, md, lg, xl_mob, xl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { Divider } from '../divider'
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

export const SocialWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: ${lg}px;

  > * {
    margin-left: ${sm}px;
  }

  > :first-child {
    margin-left: 0;
  }

  ${mediaQueries.md} {
    margin-bottom: 0;
  }
`

export const HashtagWrapper = styled.div`
  > * {
    margin-right: ${md}px;
  }

  > :last-child {
    margin-right: 0;
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
