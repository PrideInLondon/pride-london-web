import styled from 'styled-components'
import { media } from '../../theme/media'

export const Wrapper = styled.div<{ image: string }>`
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  width: 100%;
  height: 100%;
  ${media.desktop`
    height: 680px;
  `};
`
