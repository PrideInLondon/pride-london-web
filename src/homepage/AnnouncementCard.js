import React from 'react'
import PropTypes from 'prop-types'
import { handleUrl } from '../utils/location-utils'
import {
  CardImage,
  CardTitle,
  CardAnnouncement,
  CardTitleWrapper,
} from './AnnouncementCard.styles'

const AnnouncementCard = ({ title, url, image }) => {
  return (
    <CardAnnouncement {...handleUrl(url)}>
      <CardImage fixed={image.fixed} alt={image.title} />
      <CardTitleWrapper>
        <CardTitle>{title}</CardTitle>
      </CardTitleWrapper>
    </CardAnnouncement>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default AnnouncementCard
