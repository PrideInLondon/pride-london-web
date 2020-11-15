import styled from 'styled-components'
import { media } from '../../theme/media'
import { HeroProps } from './Hero.types'

export const Wrapper = styled.div<HeroProps>`
  display: flex;
  background-image: url(${props => props.background});
  background-size: cover;
  width: 100%;
  height: 100%;
  ${media.desktop`
    height: 680px;
  `};
`

export const HeroCopyWrapper = styled.div`
  margin-left: 88px;
  margin-top: 177px;
  ${media.desktop`
  margin-top: 120px;
  `};
  display: flex;
  align-items: center;
  width: 327px;
  height: 177px;
  font-family: Poppins;
  font-size: 76px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.76px;
  color: white;
  ${media.desktop`
    width: 510px;
    height: 560px;
  `};
`
