import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Column } from '../grid'
import { useIsomorphicLayoutEffect } from '../../utils'
import { checkBreakpoint } from '../../utils/style-utils'
import BannerTitle from './BannerTitle'
import BannerSubtitle from './BannerSubtitle'
import BannerDate from './BannerDate'
import {
  StyledContainer,
  StyledRow,
  StyledWrapper,
  ResponsiveImg,
  VideoWrapper,
} from './Banner.styles'

const Banner = ({
  titleText,
  subtitleText,
  titlePosition,
  date,
  imageSrc,
  imageFullWidth,
  color,
  children,
  large,
  medium,
  allowContentUnderflow,
  videoId,
  fixed,
}) => {
  const wrapper = useRef(null)
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()

  useIsomorphicLayoutEffect(() => {
    const setDimensions = debounce(function () {
      setWidth(wrapper.current.offsetWidth)
      setHeight(wrapper.current.offsetHeight)
    }, 250)

    if (typeof window !== 'undefined' && videoId) {
      setDimensions()
      window.addEventListener('resize', setDimensions)
    }
    return () => {
      if (typeof window !== 'undefined' && videoId) {
        window.removeEventListener('resize', setDimensions)
      }
    }
  }, [videoId])

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
      fixed={fixed && fixed.desktop && fixed.tablet && fixed.mobile && fixed}
      titlePosition={titlePosition}
    >
      {titleText && (
        <StyledContainer
          imageSrc={imageSrc}
          imageFullWidth={imageFullWidth}
          fixed={fixed}
        >
          <StyledRow medium={medium}>
            <Column width={1} pb={[30, 30, 2]}>
              {date && <BannerDate>{date}</BannerDate>}
              <BannerTitle>{titleText}</BannerTitle>
              {subtitleText && <BannerSubtitle>{subtitleText}</BannerSubtitle>}
              {children}
            </Column>
          </StyledRow>
          {fixed && (
            <ResponsiveImg
              aria-hidden="true"
              objectFit="cover"
              objectPosition="50% 50%"
              fixed={
                !checkBreakpoint(400)
                  ? fixed.mobile
                  : !checkBreakpoint(800)
                  ? fixed.tablet
                  : fixed.desktop
              }
            />
          )}
          {videoId && (
            <VideoWrapper height={height} width={width} aria-hidden="true">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}?background=1`}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Background video of Pride Parade"
              ></iframe>
            </VideoWrapper>
          )}
        </StyledContainer>
      )}
    </StyledWrapper>
  )
}

Banner.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  imageSrc: PropTypes.string,
  imageFullWidth: PropTypes.bool,
  subtitleText: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  titleText: PropTypes.string,
  titlePosition: PropTypes.oneOf(['top', 'bottom']),
  color: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  allowContentUnderflow: PropTypes.bool,
  videoId: PropTypes.string,
  fixed: PropTypes.object,
}

Banner.defaultProps = {
  large: false,
  medium: false,
  homepage: false,
  imageFullWidth: false,
  imageSrc: '',
  altText: '',
  subtitleText: '',
  titleText: '',
  titlePosition: 'top',
  color: '',
  children: null,
  date: null,
  allowContentUnderflow: false,
  videoId: null,
  fixed: null,
}

export default Banner
