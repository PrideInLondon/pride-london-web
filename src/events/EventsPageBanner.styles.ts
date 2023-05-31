import styled, { css } from 'styled-components'
import { BackgroundColorProps, color } from 'styled-system'
import Img from 'gatsby-image'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import left from './bannerLeft.svg'
import right from './bannerRight.svg'
import { TitleProps } from './EventsPageBanner.types'

export const StyledBanner = styled.div<BackgroundColorProps>`
  color: ${colors.white};
  background-color: ${colors.electricPurple};
  position: relative;
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
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${colors.indigo};
    }

    &:after {
      background-image: url(${left});
      bottom: 40px;
      left: 0;
      right: unset;
    }
  }

  ${mediaQueries.lg} {
    &:before {
      height: 60px;
    }

    &:after {
      bottom: 60px;
      width: 104px;
      height: 177px;
    }
  }
`

export const Title = styled.h1<TitleProps>`
  ${({ backgroundColor }) => css`
    color: ${colors.white};
    font-size: 3.75rem;
    display: inline;
    line-height: 1.1;
    background-color: ${backgroundColor};
    box-shadow: 10px 0 0 0 ${backgroundColor}, -10px 0 0 0 ${backgroundColor};
    box-decoration-break: clone;

    ${mediaQueries.md} {
      white-space: nowrap;
      line-height: 1.3;
      margin-top: 0;
    }

    ${mediaQueries.lg} {
      font-size: 5rem;
    }

    ${mediaQueries.lg} {
      font-size: 6.25rem;
    }
  `}
`

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 1em;
  margin-bottom: 0;
  max-width: 275px;
  line-height: 1.18;

  ${mediaQueries.lg} {
    font-size: 1.375rem;
    max-width: none;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 54.35%;
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
