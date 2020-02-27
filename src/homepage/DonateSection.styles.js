import styled from 'styled-components'
import { media } from '../theme/media'

export const DonateSectionsWrapper = styled.div`
  padding: 4px;
  background: #2d2f7f;
  padding: 15px;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  ${media.tablet`
    /* width: 56%; */
    padding-bottom: 50px;
  `};
`
export const HeadDonate = styled.span`
  font-size: 20px;
  color: #fff;
  margin: 0 auto;
  line-height: 26px;
  padding: 15px 0;
  font-weight: 600;

  ${media.tablet`
    font-size: 24px;
    line-height: 30px;
    padding: 25px 0;
  `};
`

export const BackgroundLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: -10px;
`

export const BackgroundRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  ${media.tablet`
    right: 0;
    top: 0;
  `};
`

export const LayerContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`
