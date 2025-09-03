import styled, { css } from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { media } from '../../theme/media'
import { Row, Container } from '../grid'

export const StyledContainer = styled(Container)`
  flex-grow: 1;
  align-items: center;
  display: flex;
  align-self: stretch;

  ${(props) =>
    !props.fixed &&
    props.imageSrc &&
    !props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    `}
`

export const StyledRow = styled(Row)`
  width: 100%;
  z-index: 1;

  ${media.tablet`
    padding-top: ${(props) => (props.medium ? 120 : 50)}px;
    padding-bottom: 50px;
  `};

  ${media.tabletMax`
    align-self: flex-end;
  `};
`

const flexTitleDirection = (titlePosition) =>
  titlePosition === 'bottom' ? 'end' : 'start'

export const StyledWrapper = styled.div`
  ${({
    color,
    large,
    medium,
    imageSrc,
    imageFullWidth,
    allowContentUnderflow,
    fixed,
    titlePosition,
  }) => css`
    display: flex;
    min-height: 270px;
    overflow: hidden;
    position: relative;
    background-color: ${color};
    min-height: ${(large || medium) && '400px'};

    ${!fixed &&
    imageSrc &&
    imageFullWidth &&
    css`
      background-image: url(${imageSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    `}

    ${allowContentUnderflow &&
    (large || medium) &&
    css`
      ${media.tablet`
        ${StyledRow} {
        align-self: flex-${flexTitleDirection(titlePosition)};
        }
    `};
    `}

    ${allowContentUnderflow &&
    medium &&
    css`
      ${media.tabletMax`
      ${StyledRow} {
        align-self: flex-${flexTitleDirection(titlePosition)};
        padding-top: 20px;
      }
    `};
    `}

  ${media.mobile`
    min-height: ${large && '400px'};
  `};

    ${media.tablet`
    align-items: center;
    min-height: ${large || medium ? '500px' : '400px'};
    padding: 0;
  `};

    ${media.desktop`
    min-height: ${large ? '650px' : medium ? '590px' : '400px'};
  `};

    ${media.desktopHD`
    min-height: ${large && '800px'};
  `};
  `}
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

export const VideoWrapper = styled.div`
  padding-top: 56.25%;
  width: ${({ width, height }) =>
    height / width > 0.5625 ? `${height * (16 / 9)}px` : '100%'};
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
