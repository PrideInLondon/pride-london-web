import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../../../components/image'
import { ArticleAuthor, ArticleTitle, Container } from './styles'

const ViewsCard = props => {
  const { preview, author, title } = props
  return (
    <Container>
      <Image src={preview} altText={`${author} — ${title}`} />
      <ArticleAuthor>Lisa Charlwood-Green</ArticleAuthor>
      <ArticleTitle>LGTB+ Women Say "Wow!"</ArticleTitle>
    </Container>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  preview: PropTypes.string,
}

ViewsCard.defaultProps = {
  author: 'Lisa Charlwood-Green',
  title: 'LGTB+ Women Say "Wow!',
  preview:
    'https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

export default ViewsCard
