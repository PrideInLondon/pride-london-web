import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import headline from './stayingInHeadline.svg'

const ComingOutWrapper = styled.div`
  background-color: ${colors.mexicanPink};
  padding-bottom: 1rem;
  svg {
    width: 100%;
    height: auto;
  }

  ${mediaQueries.md} {
    padding: 2rem 2rem 2rem 0;
    width: 125%;
  }
`

export const ComingOut: React.FC = () => {
  return (
    <ComingOutWrapper aria-hidden="true">
      <img src={headline} alt="Text saying 'Coming Out'" />
    </ComingOutWrapper>
  )
}
