import React from 'react'
import PropTypes from 'prop-types'
import { handleUrl } from '../../../../utilities'
import {
  CardImage,
  CardTitle,
  CardAnnouncement,
  CardTitleWrapper,
  CardLink,
} from './styles'

const AnnouncementCard = ({ title, url, fixed }) => {
  return (
    <CardAnnouncement>
      <CardImage fixed={fixed} />
      <CardTitleWrapper>
        <CardTitle>
          <CardLink {...handleUrl(url)}>{title}</CardLink>
        </CardTitle>
      </CardTitleWrapper>
    </CardAnnouncement>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string.isRequired,
  fixed: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default AnnouncementCard
