import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import { Column, Row, Container } from '../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

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

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large === 'true' ? '500px' : '400px')};
    padding: 0;
  `};
`

const StyledWrapperWithUnderflow = styled(StyledWrapper)`
  align-items: flex-start;
  min-height: 380px;
  padding-top: 50px;
  margin-bottom: -150px;
`

const StyledRow = styled(Row)`
  display: block;
  flex-basis: 100%;
`

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
      <Container>
        <StyledRow>
          <Column width={1}>
            <BannerTitle>{titleText}</BannerTitle>
            <BannerSubtitle>{subtitleText}</BannerSubtitle>
          </Column>
          {children}
        </StyledRow>
      </Container>
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
