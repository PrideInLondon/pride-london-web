import styled from 'styled-components'
import { media } from '../theme/media'

export const Title = styled.p`
  font-size: 18px;
  line-height: 1.44;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-grow: 1;
  flex-direction: column;
  margin: 30px 0 0;
`
export const Head = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 26px;

  ${media.tablet`
    font-size: 32px;
  `};
`
