import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../../../theme/media'
import Image from '../../../../components/image'

const ArticleTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  margin: 0.5rem 0;
`

const ArticleAuthor = styled.p`
  color: ${props => props.theme.colors.darkGrey};
  margin: 0.25rem 0;
  font-size: 0.825rem;
`

const Container = styled.div`
  min-width: 162px;
  ${media.tablet`
    min-width: 400px;
  `};
`

const ViewsCard = props => {
  const { preview } = props
  return (
    <Container>
      <Image src={preview} />
      <ArticleAuthor>Lisa Charlwood-Green</ArticleAuthor>
      <ArticleTitle>LGTB+ Women Say "Wow!"</ArticleTitle>
    </Container>
  )
}

ViewsCard.propTypes = {
  preview: PropTypes.string,
}

ViewsCard.defaultProps = {
  preview:
    'https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
}

export default ViewsCard
