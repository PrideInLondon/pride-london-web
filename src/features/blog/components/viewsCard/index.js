import React from 'react'
import PropTypes from 'prop-types'
import {
  ArticleAuthor,
  ArticleTitle,
  Container,
  ViewsThumbail,
  ArticleTitleTextContainer,
} from './styles'

const ViewsCard = props => {
  const { portraitPhoto, author, title } = props
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
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  portraitPhoto: PropTypes.shape({}).isRequired,
}

export default ViewsCard
