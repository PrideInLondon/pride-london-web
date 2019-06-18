import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Column } from '../../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerDate from '../bannerDate'
import {
  StyledContainer,
  StyledRow,
  StyledWrapper,
  VideoWrapper,
} from './styles'

const BannerImage = ({
  titleText,
  subtitleText,
  date,
  imageSrc,
  imageFullWidth,
  color,
  children,
  large,
  medium,
  allowContentUnderflow,
  videoId,
}) => {
  const wrapper = useRef(null)
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const setDimensions = debounce(function() {
    setWidth(wrapper.current.offsetWidth)
    setHeight(wrapper.current.offsetHeight)
  }, 250)

  useEffect(() => {
    if (typeof window !== 'undefined' && videoId) {
      setDimensions()
      window.addEventListener('resize', setDimensions())
    }
    return () => {
      if (typeof window !== 'undefined' && videoId) {
        window.removeEventListener('resize', setDimensions())
      }
    }
  }, [setDimensions, videoId])

  return (
    <StyledWrapper
      color={color}
      large={large}
      medium={medium}
      allowContentUnderflow={allowContentUnderflow}
      imageSrc={imageSrc}
      imageFullWidth={imageFullWidth}
      role="banner"
      ref={wrapper}
    >
      {titleText && (
        <StyledContainer imageSrc={imageSrc} imageFullWidth={imageFullWidth}>
          <StyledRow medium={medium}>
            <Column width={1} pb={[30, 30, 2]}>
              {date && <BannerDate>{date}</BannerDate>}
              <BannerTitle>{titleText}</BannerTitle>
              {subtitleText && <BannerSubtitle>{subtitleText}</BannerSubtitle>}
              {children}
            </Column>
          </StyledRow>
          {videoId && (
            <VideoWrapper height={height} width={width}>
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?background=1`}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
          )}
        </StyledContainer>
      )}
    </StyledWrapper>
  )
}

BannerImage.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageFullWidth: PropTypes.bool,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  allowContentUnderflow: PropTypes.bool,
  videoId: PropTypes.string,
}

BannerImage.defaultProps = {
  large: false,
  medium: false,
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
  videoId: null,
}

export default BannerImage
