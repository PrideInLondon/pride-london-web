import React from 'react'
import PropTypes from 'prop-types'
import { handleUrl } from '../utils/location-utils'
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardTextWrapper,
  // CardDesc,
  ButtonWrapper,
} from './AnnouncementListCard.styles'
import styled from 'styled-components'
import { Button } from '../components/button'

const AnnouncementCard = ({ title, url, callToActionText, image, key }) => {
  return (
    <>
      <CardWrapper>
        <CardImage fixed={image.fixed} alt={image.title} />
        <CardTextWrapper>
          <CardTitle>{title}</CardTitle>
          <br />
          {/* <CardDesc>{desc}</CardDesc> */}
          <ButtonWrapper>
            <Button to={url}>{callToActionText}</Button>
          </ButtonWrapper>
        </CardTextWrapper>
      </CardWrapper>
    </>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  // desc: PropTypes.string.isRequired,
}

export default AnnouncementCard
