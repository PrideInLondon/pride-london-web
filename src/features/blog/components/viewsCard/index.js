import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../../../components/image'
import {
  ArticleAuthor,
  ArticleTitle,
  Container,
  ViewsThumbail,
  ArticleTitleTextContainer,
} from './styles'

const ViewsCard = props => {
  const { portraitPhoto, date, author, title } = props
  const photoUrl = portraitPhoto ? portraitPhoto.file.url : ''
  return (
    <Container>
      <ViewsThumbail src={photoUrl} altText={`${author} — ${title}`} />
      <ArticleAuthor>{author}</ArticleAuthor>
      <ArticleTitle>
        <ArticleTitleTextContainer>{title}</ArticleTitleTextContainer>
      </ArticleTitle>
    </Container>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
}

ViewsCard.defaultProps = {
  portraitPhoto: {
    file: {},
  },
  author: 'Lisa Charlwood-Green',
  title: 'LGTB+ Women Say "Wow!',
  preview:
    'https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

export default ViewsCard
