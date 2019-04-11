import React from 'react'
import PropTypes from 'prop-types'
import { Column } from '../grid'
import BannerTitle from '../banner/bannerTitle'
import BannerSubtitle from '../banner/bannerSubtitle'
import BannerDate from '../banner/bannerDate'
import { StyledContainer, StyledRow, StyledWrapper } from './styles'

const BannerImage = ({
  titleText,
  subtitleText,
  date,
  imageSrc,
  imageFullWidth,
  color,
  children,
  large,
  allowContentUnderflow,
  homepage,
}) => (
  <StyledWrapper
    color={color}
    large={large}
    allowContentUnderflow={allowContentUnderflow}
    imageSrc={imageSrc}
    imageFullWidth={imageFullWidth}
    role="banner"
  >
    <StyledContainer
      homepage={homepage}
      imageSrc={imageSrc}
      imageFullWidth={imageFullWidth}
    >
      <StyledRow>
        <Column width={1}>
          {date && <BannerDate>{date}</BannerDate>}
          <BannerTitle>{titleText}</BannerTitle>
          <BannerSubtitle>{subtitleText}</BannerSubtitle>
          {children}
        </Column>
      </StyledRow>
    </StyledContainer>
  </StyledWrapper>
)

BannerImage.propTypes = {
  large: PropTypes.bool,
  homepage: PropTypes.bool,
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

BannerImage.defaultProps = {
  large: false,
  homepage: false,
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

export default BannerImage
