import React from 'react'
import styled from 'styled-components'
import Title from '../../Components/title'
import ImageBanner from '../../../../components/imageBanner'
import theme from '../../../../theme/theme'
import NewsCard from '../../Components/newsCard'
import {
  ALL_ARTICLES,
  NEWS,
  RESEARCH,
  ANNOUNCEMENTS,
  PARTNERS,
} from '../../Components/newsFilter/config'

// import PropTypes from 'prop-types'

const Container = styled.div`
  margin: 1rem;
`

const NewsContainer = () => {
  return (
    <div>
      <Container>
        <Title>News</Title>
      </Container>
      <ImageBanner
        altText=""
        color={theme.colors.beachBlue}
        allowContentUnderflow
      />
      <Container>
        <NewsCard type={ALL_ARTICLES} />
        <NewsCard type={NEWS} />
        <NewsCard type={RESEARCH} />
        <NewsCard type={ANNOUNCEMENTS} />
        <NewsCard type={PARTNERS} />
      </Container>
    </div>
  )
}

export default NewsContainer
