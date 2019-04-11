import styled from 'styled-components'
import { media } from '../../../../../theme/media'

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

export const ButtonsContainer = styled.div`
  display: flex;
  width: 76%;
  max-width: 240px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 160px;

  ${media.tablet`
    width: 96%;
    max-width: unset;
    flex-direction: row;
    min-height: unset;
  `};

  a {
    min-width: 66px;
    font-weight: 600;
    padding: 12px;

    ${media.tablet`
      min-width: 80px;
    `};
  }

  span {
    color: #fff;
    font-weight: 600;
  }
`
export const ButtonSingle = styled.div`
  a {
    ${media.tablet`
      font-weight: 600;
      font-size: 16px;
    `};
  }
`

export const ButtonsGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.tablet`
    width: 45%;
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
