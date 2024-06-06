import React from 'react'
import PropTypes from 'prop-types'
import { Banner } from '../components/banner'
import { Container, Row, Column } from '../components/grid'
import constants from '../constants'
import background from './bannerBackground.svg'
import ViewsContainer from './ViewsContainer'
import NewsContainer from './NewsContainer'

const mapEntries = (news) => {
  if (!news.edges || !Array.isArray(news.edges)) return []
  return news.edges.map(({ node }) => ({ ...node }))
}

const NewsAndViewsPage = ({ data: { articles, views } }) => (
  <>
    <Banner
      titleText="News and views"
      subtitleText="Read about what we’re talking about in the London LGBTQ+ community"
      altText="News and views"
      imageSrc={background}
      imageFullWidth
      medium
      allowContentUnderflow
    />
    <ViewsContainer views={mapEntries(views)} />
    <Container>
      <Row>
        <Column width={1} py={0}>
          <hr />
        </Column>
      </Row>
    </Container>
    <NewsContainer
      articles={mapEntries(articles).map((art) => ({
        ...art,
        category: constants.articleCategories.find(
          (cat) => cat.title == art.category
        ),
      }))}
      categories={constants.articleCategories}
    />
  </>
)

NewsAndViewsPage.propTypes = {
  data: PropTypes.shape({
    views: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
    news: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
    categories: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
    articles: PropTypes.any,
  }).isRequired,
}

export default NewsAndViewsPage
