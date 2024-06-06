import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselItemWrapper,
  CardWrapper,
  LinkCardWrapper,
  CardImage,
  CardTitle,
  CardTextWrapper,
  CardDesc,
  ButtonWrapper,
} from './AnnouncementCarouselCard.styles'

const AnnouncementCarouselCard = ({ image, headline, description, url }) => {
  return (
    <CarouselItemWrapper>
      <CardWrapper>
        <LinkCardWrapper href={url}>
          {/* <CardImage src={image} alt={headline} /> */}
          <CardImage src={`http:${image.fixed.src}`} alt={headline} />
          <CardTextWrapper>
            {/* <CardTitle>{headline}</CardTitle> */}
            <CardDesc>{description}</CardDesc>
          </CardTextWrapper>
        </LinkCardWrapper>
      </CardWrapper>
    </CarouselItemWrapper>
  )
}

AnnouncementCarouselCard.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default AnnouncementCarouselCard
