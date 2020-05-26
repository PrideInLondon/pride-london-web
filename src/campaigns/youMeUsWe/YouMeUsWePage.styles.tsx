import React from 'react'
import styled from 'styled-components'
import { ShareBar } from '../../components/shareBar'
import { Tag } from '../../components/tag'
import { lg, xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fonts } from '../../theme/fonts'

export const DesktopShareBarWrapper = styled.div`
  display: none;
  position: absolute;
  top: 150px;
  left: 90px;
  height: 100%;

  ${mediaQueries.md} {
    display: block;
  }
`

export const DesktopShareBar = styled(ShareBar)`
  position: sticky;
  top: 90px;
  margin-bottom: 120px;
`

export const MobileShareBar = styled(ShareBar)`
  display: block;

  ${mediaQueries.md} {
    display: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  flex-direction: column;
  width: 100%;
  padding: ${lg}px;

  h2,
  h3 {
    text-transform: uppercase;
    font-family: ${fonts.cactus};
  }

  p {
    max-width: 620px;
  }
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
