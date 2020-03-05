import styled from 'styled-components'
import { BackgroundColorProps, color } from 'styled-system'
import Img from 'gatsby-image'
import { hideVisually } from 'polished'
import { colors } from '../theme/colors'
import { fonts } from '../theme/fonts'
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

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
  max-width: 275px;
  line-height: 1.18;

  ${mediaQueries.xl} {
    font-size: 1.375rem;
    max-width: none;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 54.35%;
  margin-right: -1px;
`

export const ResponsiveImg = styled(Img)`
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

export const SponsorLogoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${colors.white};
  padding: 10px 10px 5px 10px;
  width: 100px;

  span {
    display: block;
    text-align: center;
    font-size: 0.625rem;
    color: ${colors.indigo};
    font-family: ${fonts.title};
    margin-bottom: 0.5em;
  }

  .gatsby-image-wrapper {
    margin: 0;
    max-width: 100%;
    height: auto;
  }

  ${mediaQueries.md} {
    padding: 20px 20px 15px 20px;
    width: 150px;
    span {
      font-size: 0.875rem;
    }
  }
`
export const SponsorLogoInner = styled.div`
  position: relative;
  padding-top: 83.96%;
`
