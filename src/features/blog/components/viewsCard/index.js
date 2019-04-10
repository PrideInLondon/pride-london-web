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
  const { headerImage, author, title } = props
  console.log(headerImage)
  const photoUrl = headerImage ? headerImage.file.url : ''
  return (
    <Container>
      <ViewsThumbail src={photoUrl} altText={`${author} — ${title}`} />
      <ArticleAuthor>{author.display_name.display_name}</ArticleAuthor>
      <ArticleTitle>
        <ArticleTitleTextContainer>{title}</ArticleTitleTextContainer>
      </ArticleTitle>
    </Container>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.shape({
    display_name: PropTypes.shape({ display_name: PropTypes.string }),
  }).isRequired,
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.shape({}).isRequired,
}

export default ViewsCard
