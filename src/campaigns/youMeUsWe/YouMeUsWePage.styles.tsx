import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../components/tag'
import { H1 } from '../../components/typography'
import { lg, xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

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
