import React from 'react'
import PropTypes from 'prop-types'
import { Column } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerDate from '../bannerDate'
import { StyledContainer, StyledRow, StyledWrapper } from './styles'

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
