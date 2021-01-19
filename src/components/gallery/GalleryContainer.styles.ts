import styled from 'styled-components'
import { media } from '../../theme/media'

export const Grid = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  ${media.mobile`
    grid-template-columns: repeat(1, 1fr);
  `}
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`
