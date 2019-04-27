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

const AnnouncementCard = ({ image, title, url }) => {
  return (
    <CardAnnouncement>
      <CardImage style={{ backgroundImage: `url('${image}')` }} />
      <CardTitleWrapper>
        <CardTitle>
          <CardLink {...handleUrl(url)}>{title}</CardLink>
        </CardTitle>
      </CardTitleWrapper>
    </CardAnnouncement>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
}

AnnouncementCard.defaultProps = {
  title: '',
  image: '',
  url: '',
}

export default AnnouncementCard
