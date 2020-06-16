import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../theme/mediaQueries'
import { xl } from '../../theme/space'
import asset from './assets/mark.png'

const StyledMark = styled.img`
  width: 96px;
  margin: ${xl}px;

  ${mediaQueries.md} {
    width: 120px;
  }
`

const Mark: React.FC = () => (
  <StyledMark src={asset} alt="You! Me! Us! We! in rainbow text" />
)

export default Mark
