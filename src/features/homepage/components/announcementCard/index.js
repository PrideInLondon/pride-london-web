import React from 'react'
import PropTypes from 'prop-types'
import {
  CardImage,
  CardTitle,
  CardAnnouncement,
  CardTitleWrapper,
} from './styles'

const AnnouncementCard = ({ image: url = '', title }) => {
  return (
    <CardAnnouncement>
      <CardImage style={{ backgroundImage: `url('${url}')` }} />
      <CardTitleWrapper>
        <CardTitle>
          <span>{title}</span>
        </CardTitle>
      </CardTitleWrapper>
    </CardAnnouncement>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

AnnouncementCard.defaultProps = {
  title: '',
  image: '',
}

export default AnnouncementCard
