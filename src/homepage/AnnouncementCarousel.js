import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../components/button'
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardTextWrapper,
  // CardDesc,
  ButtonWrapper,
} from './AnnouncementListCard.styles'
import {
  AnnouncementCarouselWrapper,
  CarouselItem,
} from './AnnouncementCarousel.styles'
import styled from 'styled-components'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import AnnouncementCarouselCard from './AnnouncementCarouselCard'

import './AnnouncementCarousel.css'

const AnnouncementCarousel = ({ announcements }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890 && window.innerWidth > 550)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <AnnouncementCarouselWrapper>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        // arrows={window.innerWidth > 890}
        autoPlay={false}
        autoPlaySpeed={3000}
        centerMode={false}
        // centerMode={isMobile}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass={''}
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible={isMobile}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1350,
            },
            items: 3,
            partialVisibilityGutter: 0,
          },
          mobile2: {
            breakpoint: {
              max: 890,
              min: 550,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 550,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 10,
          },
          tablet: {
            breakpoint: {
              max: 1350,
              min: 890,
            },
            items: 2,
            partialVisibilityGutter: 10,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {announcements.map((announcement) => (
          <AnnouncementCarouselCard
            key={announcement.node.url} // Ensure a unique key for each item
            description={announcement.node.desc}
            headline={announcement.node.title}
            image={announcement.node.image}
            url={announcement.node.url}
          />
        ))}
      </Carousel>
    </AnnouncementCarouselWrapper>
  )
}

AnnouncementCarousel.propTypes = {
  announcements: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AnnouncementCarousel
