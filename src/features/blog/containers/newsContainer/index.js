import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/title'
import NewsCard from '../../../../features/blog/components/newsCard/index'
import FeaturedArticleContainer from '../featuredArticleContainer'
import FilteredPagedCardContainer from '../../../../components/filteredPagedCardContainer'
import {
  Container,
  Column,
  Row,
  GreyWrapper,
} from '../../../../components/grid'

export const pageSize = 9

const NewsContainer = ({ articles, categories }) => {
  return (
    <section>
      <Container>
        <Row>
          <Column width={1}>
            <Title>News</Title>
          </Column>
        </Row>
      </Container>
      <GreyWrapper>
        <FeaturedArticleContainer />
        <FilteredPagedCardContainer
          filterType="radio"
          categories={categories}
          showAllCategoryTitle="All Articles"
          cardContent={articles}
          CardComponent={NewsCard}
          showMoreButtonText="Show more articles"
          pageSize={pageSize}
        />
      </GreyWrapper>
    </section>
  )
}

NewsContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      readTime: PropTypes.number,
      category: PropTypes.shape({
        hexColour: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      hexColour: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default NewsContainer
