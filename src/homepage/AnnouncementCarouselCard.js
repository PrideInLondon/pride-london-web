import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselItemWrapper,
  CardWrapper,
  CardNoOverflow,
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
          <CardNoOverflow>
            <CardImage
              src={`http:${image.fixed.src}`}
              alt={description ? description.desc : ''}
            />
          </CardNoOverflow>
          <CardTextWrapper>
            <CardDesc>{description ? description.desc : ''}</CardDesc>
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
