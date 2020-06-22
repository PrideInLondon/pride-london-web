import styled from 'styled-components'
import { lg, xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import ActsOfAllyshipHeading from './ActsOfAllyshipHeading'

export const Heading = styled(ActsOfAllyshipHeading)`
  margin-top: ${xl}px;
  width: 327px;
  height: 92px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
    width: 618px;
    height: 173px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1050px;
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    flex-direction: row;

    > :first-child {
      margin-right: ${lg}px;
    }
  }
`

export const BoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${lg}px;

  > :nth-child(2) {
    margin: ${lg}px 0;
  }

  > * {
    flex-grow: 1;
    flex-basis: 0;
  }

  ${mediaQueries.lg} {
    flex-direction: row;
    padding: 0 ${xl}px;
    margin-top: ${xl}px;

    > :nth-child(2) {
      margin: 0 ${lg}px;
    }
  }
`
