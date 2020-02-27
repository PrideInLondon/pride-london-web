import styled from 'styled-components'
import { media } from '../theme/media'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 3.125rem 0 0.5rem 0;
`
export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 700;

  ${media.tablet`  
    font-size: 32px;
  `};
`

export const HiddeOnlyMobile = styled.div`
  display: none;

  ${media.tablet`  
    display: block;
  `};
`
