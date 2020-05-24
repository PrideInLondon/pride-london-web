import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../components/tag'
import { H1, P } from '../../components/typography'
import { lg, xl, xl_mob, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fonts } from '../../theme/fonts'
import ActsOfAllyship from './ActsOfAllyship'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  width: 100%;
  padding: ${lg}px;
`

export const PlaceholderDiv = styled(({ name, ...props }) => (
  <div {...props}>{name} placeholder</div>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 2px solid;
  width: 100%;
`

export const StyledTag = styled(Tag)`
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const CelebratingHeading = styled(H1)`
  margin-top: ${lg}px;
  text-transform: uppercase;
  max-width: 840px;
  text-align: center;
`

export const CelebratingContentWrapper = styled.div`
  max-width: 620px;
`

export const ActsOfAllyshipHeading = styled(ActsOfAllyship)`
  margin-top: ${xl}px;
  width: 327px;
  height: 92px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
    width: 618px;
    height: 173px;
  }
`

export const ActsOfAllyshipContent = styled.div`
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

export const ActsOfAllyshipBoxesWrapper = styled.div`
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
    padding: ${xl}px;

    > :nth-child(2) {
      margin: 0 ${lg}px;
    }
  }
`

export const ForEveryKindWrapper = styled.div`
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const ForEveryKindHeading = styled(H1).attrs({
  as: 'h2',
  fontFamily: fonts.cactus,
})`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0 !important;
`

export const ForEveryKindContent = styled(P)`
  margin-top: ${xl_mob}px !important;

  ${mediaQueries.md} {
    max-width: 620px;
    margin-top: ${xl}px !important;
  }
`
