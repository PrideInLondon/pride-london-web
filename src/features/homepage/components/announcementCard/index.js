import React from 'react'
import PropTypes from 'prop-types'
import {
  CardImage,
  CardTitle,
  CardAnnouncement,
  CardTitleWrapper,
} from './styles'

const AnnouncementCard = ({ image: url = '', title, id }) => {
  return (
    <CardAnnouncement>
      <CardImage style={{ backgroundImage: `url('${url}')` }} />
      <CardTitleWrapper>
        <CardTitle>
          <a href={`/blog/${id}`}>{title}</a>
        </CardTitle>
      </CardTitleWrapper>
    </CardAnnouncement>
  )
}

AnnouncementCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}

AnnouncementCard.defaultProps = {
  title: '',
  image: '',
  id: '',
}

export default AnnouncementCard
