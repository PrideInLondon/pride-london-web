import styled from 'styled-components'
import { BackgroundColorProps, color } from 'styled-system'
import Img from 'gatsby-image'
import { hideVisually } from 'polished'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import left from './bannerLeft.svg'
import right from './bannerRight.svg'

export const StyledBanner = styled.div<BackgroundColorProps>`
  color: ${colors.white};
  position: relative;
  padding-bottom: 20px;
  ${color};

  &:after {
    content: '';
    background-image: url(${right});
    width: 70px;
    height: 119px;
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  ${mediaQueries.md} {
    padding-bottom: 50px;
    &:after {
      background-image: url(${left});
      bottom: 0;
      left: 0;
      right: unset;
    }
  }

  ${mediaQueries.lg} {
    &:after {
      bottom: 0;
      width: 104px;
      height: 177px;
    }
  }
`

export const Title = styled.h1`
  ${hideVisually()}
`
export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 54.35%;
  margin-right: -1px;
`

export const ResponsiveImg = styled(Img)<{ fixed: any }>`
  position: absolute !important;
  top: 50%;
  left: 50%;
  height: 100% !important;
  width: 100% !important;
  transform: translate(-50%, -50%);

  img {
    min-height: 100%;
    min-width: 100%;
  }
`
