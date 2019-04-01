import React from 'react'
import PropTypes from 'prop-types'
import { Column, Row } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import {
  StyledContainer,
  StyledWrapper,
  StyledWrapperWithUnderflow,
} from './styles'

const ImageBanner = ({
  titleText,
  subtitleText,
  imageSrc,
  altText,
  color,
  children,
  large,
  allowContentUnderflow,
}) => {
  const Wrapper = allowContentUnderflow
    ? StyledWrapperWithUnderflow
    : StyledWrapper
  return (
    <Wrapper color={color} large={large} className="bannerwrapper">
      {imageSrc && <img src={imageSrc} alt={altText} />}
      <StyledContainer>
        <Row>
          <Column width={1}>
            <BannerTitle>{titleText}</BannerTitle>
            <BannerSubtitle>{subtitleText}</BannerSubtitle>
          </Column>
          {children}
        </Row>
      </StyledContainer>
    </Wrapper>
  )
}

ImageBanner.propTypes = {
  large: PropTypes.string,
  imageSrc: PropTypes.string,
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
  large: 'false', // this isn' a bool because styled components
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  color: '',
  children: null,
  allowContentUnderflow: false,
}

export default ImageBanner
