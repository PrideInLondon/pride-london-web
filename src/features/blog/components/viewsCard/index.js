import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import Image from '../../../../components/image'

const ArticleTitle = styled.h2`
  color: ${theme.colors.black};
  margin: 0.5rem 0;
`

const ArticleAuthor = styled.p`
  color: ${theme.colors.darkGrey};
  margin: 0.25rem 0;
  font-size: 0.825rem;
`

const Container = styled.div`
  min-width: 162px;
  padding: 5px;

  ${media.tablet`
    min-width: 400px;
  `};
`

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
