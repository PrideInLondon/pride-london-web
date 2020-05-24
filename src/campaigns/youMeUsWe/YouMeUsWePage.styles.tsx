import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../components/tag'
import { H1, P } from '../../components/typography'
import { lg, xl, xl_mob, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fonts } from '../../theme/fonts'

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

export const ForEveryKindHeading = styled(H1).attrs({
  as: 'h2',
  fontFamily: fonts.cactus,
})`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0 !important;
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const ForEveryKindContent = styled(P)`
  margin-top: ${xl_mob}px !important;

  ${mediaQueries.md} {
    max-width: 620px;
    margin-top: ${xl}px !important;
  }
`
