import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import theme from '../../../theme/theme'
import { sm, md, lg, xl } from '../../../theme/breakpoints'
import ChevronIcon from '../../../components/icons/chevronIcon'
import Arrow from './Arrow'

import {
  CarouselContainer,
  CarouselImage,
  SlickContainer,
  ImageContainer,
} from './Carousel.styles'

const carouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '300px',
  centerMode: true,
  nextArrow: (
    <Arrow>
      <ChevronIcon />
    </Arrow>
  ),
  prevArrow: (
    <Arrow left>
      <ChevronIcon />
    </Arrow>
  ),
  responsive: [
    {
      breakpoint: sm,
      settings: {
        centerPadding: '10px',
      },
    },
    {
      breakpoint: md,
      settings: {
        centerPadding: '30px',
      },
    },
    {
      breakpoint: lg,
      settings: {
        centerPadding: '100px',
      },
    },
    {
      breakpoint: xl,
      settings: {
        centerPadding: '300px',
      },
    },
  ],
}

export const StyledSlider = styled(Slider)`
  .slick-track {
    & > div {
      transition: padding 0.4s ease;
    }
  }
  .slick-slide:not(.slick-current) {
    padding: 30px;
    background-color: ${theme.colors.lightGrey};
  }
  .slick-current {
    padding: 0px;
  }
`
const Carousel = ({ carouselItems }) => (
  <CarouselContainer>
    <StyledSlider {...carouselSettings}>
      {carouselItems['en-GB'].map(carouselItem => (
        <SlickContainer key={carouselItem.sys.id}>
          <ImageContainer>
            <CarouselImage src={carouselItem.fields.file['en-GB'].url} />
          </ImageContainer>
        </SlickContainer>
      ))}
    </StyledSlider>
  </CarouselContainer>
)

Carousel.propTypes = {
  carouselItems: PropTypes.object.isRequired,
}
export default Carousel
