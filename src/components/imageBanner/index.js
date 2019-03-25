import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

const StyledContainer = styled(Container)`
  flex-grow: 1;
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

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index: -1;
  }

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
      <StyledContainer>
        {imageSrc && <img src={imageSrc} alt={altText} />}
        <Row>
          <Column width={1}>
            <BannerTitle>{titleText}</BannerTitle>
            <BannerSubtitle>{subtitleText}</BannerSubtitle>
          </Column>
          {children}
        </Row>
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
