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
  const { portraitImage, author, title } = props
  const photoUrl = portraitImage ? portraitImage.file.url : ''
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
  portraitImage: PropTypes.shape({}).isRequired,
}

export default ViewsCard
