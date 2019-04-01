import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
// import { relative } from 'upath'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

const StyledContainer = styled(Container)`
  flex-grow: 1;
  ${props =>
    props.imageFullWidth && props.imageSrc
      ? css`
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            height: auto;
            width: auto;
          }
        `
      : css`
          display: flex;
          position: relative;
          height: 100%;
          align-items: center;

          img {
            bottom: 0;
            align-self: flex-end;
          }
        `}

  img {
    z-index: -1;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};
  padding-bottom: 35px;
  z-index: -2;

  ${props =>
    props.allowContentUnderflow &&
    css`
      align-items: flex-start;
      min-height: 380px;
      padding-top: 50px;
      margin-bottom: -75px;
    `}

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large ? '700px' : '400px')};
    padding: 0;
  `};
`
const StyledRow = styled(Row)`
  ${props =>
    props.imageFullWidth &&
    props.imageSrc &&
    css`
      position: absolute;
      width: 100%;
    `}
`

const ImageBanner = ({
  titleText,
  subtitleText,
  imageSrc,
  imageFullWidth,
  altText,
  color,
  children,
  large,
  allowContentUnderflow,
}) => {
  return (
    <StyledWrapper
      color={color}
      large={large}
      imageFullWidth={imageFullWidth}
      allowContentUnderflow={allowContentUnderflow}
    >
      <StyledContainer imageFullWidth={imageFullWidth} imageSrc={imageSrc}>
        {imageSrc && <img src={imageSrc} alt={altText} />}
        <StyledRow imageFullWidth={imageFullWidth} src={imageSrc}>
          <Column width={1}>
            <BannerTitle>{titleText}</BannerTitle>
            <BannerSubtitle>{subtitleText}</BannerSubtitle>
          </Column>
          {children}
        </StyledRow>
      </StyledContainer>
    </StyledWrapper>
  )
}

ImageBanner.propTypes = {
  large: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageFullWidth: PropTypes.bool,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  allowContentUnderflow: PropTypes.bool,
}

ImageBanner.defaultProps = {
  large: false,
  imageSrc: '',
  imageFullWidth: false,
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
  children: null,
  allowContentUnderflow: false,
}

export default ImageBanner
