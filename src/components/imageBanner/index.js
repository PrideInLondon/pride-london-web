import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerDate from '../bannerDate'

const StyledContainer = styled(Container)`
  flex-grow: 1;
  align-items: center;
  display: flex;
  padding-bottom: 17vh;
  align-self: stretch;

  ${media.tablet`
    padding-bottom: 33vh;
  `};

  ${props =>
    props.imageSrc &&
    !props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right bottom;
    `}
`

const StyledRow = styled(Row)`
  width: 100%;

  ${media.tabletMax`
    align-self: flex-end;
  `};
`

const StyledWrapper = styled.div`
  display: flex;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};
  height: ${props => props.large && '400px'};

  ${props =>
    props.imageSrc &&
    props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    `}

  ${props =>
    props.allowContentUnderflow &&
    css`
      align-items: flex-start;
      min-height: 380px;
      padding-top: 50px;
      margin-bottom: -75px;
    `}


  ${media.mobile`
    height: ${props => props.large && '400px'};
  `};

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large ? '500px' : '400px')};
    padding: 0;
  `};

  ${media.desktop`
    height: ${props => props.large && '650px'};
  `};

  ${media.desktopHD`
    height: ${props => props.large && '800px'};
  `};
`

const ImageBanner = ({
  titleText,
  subtitleText,
  date,
  imageSrc,
  imageFullWidth,
  color,
  children,
  large,
  allowContentUnderflow,
}) => (
  <StyledWrapper
    color={color}
    large={large}
    allowContentUnderflow={allowContentUnderflow}
    imageSrc={imageSrc}
    imageFullWidth={imageFullWidth}
    role="banner"
  >
    <StyledContainer imageSrc={imageSrc} imageFullWidth={imageFullWidth}>
      <StyledRow>
        <Column width={1}>
          {date && <BannerDate>{date}</BannerDate>}
          <BannerTitle>{titleText}</BannerTitle>
          <BannerSubtitle>{subtitleText}</BannerSubtitle>
          {children}
        </Column>
      </StyledRow>
      {/* {imageSrc && <img src={imageSrc} alt={altText} />} */}
    </StyledContainer>
  </StyledWrapper>
)

ImageBanner.propTypes = {
  large: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageFullWidth: PropTypes.bool,
  altText: PropTypes.string,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  allowContentUnderflow: PropTypes.bool,
}

ImageBanner.defaultProps = {
  large: false,
  imageFullWidth: false,
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
  children: null,
  date: null,
  allowContentUnderflow: false,
}

export default ImageBanner
