import React from 'react'
import PropTypes from 'prop-types'
import { Column } from '../../grid'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerDate from '../bannerDate'
import { checkBreakpoint } from '../../../utilities'
import {
  StyledContainer,
  StyledRow,
  StyledWrapper,
  ResponsiveImg,
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
  fixed,
}) => {
  return (
    <StyledWrapper
      color={color}
      large={large}
      medium={medium}
      allowContentUnderflow={allowContentUnderflow}
      imageSrc={imageSrc}
      imageFullWidth={imageFullWidth}
      role="banner"
      fixed={fixed && fixed.desktop && fixed.tablet && fixed.mobile && fixed}
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
  fixed: PropTypes.object,
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
  fixed: null,
}

export default BannerImage
