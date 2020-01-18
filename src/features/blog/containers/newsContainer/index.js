import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/title'
import FiltersContainer from '../filtersContainer'
import NewsCards from '../newsCards'
import FeaturedArticleContainer from '../featuredArticleContainer'
import {
  Container,
  Column,
  Row,
  GreyWrapper,
} from '../../../../components/grid'
import Button from '../../../../components/button'

const initialPaginationState = {
  end: 9,
  step: 9,
}
const NewsContainer = ({ articles, categories }) => {
  const [selectedFilter, setSelectedFilter] = useState(
    categories.find(({ title }) => title === 'All Articles')
  )
  const [initialPagination, setInitialPagination] = useState(
    initialPaginationState
  )
  const [totalArticles, setTotalArticles] = useState(articles)

  const handleFilterClick = label => {
    setSelectedFilter(label)
    setInitialPagination(initialPaginationState)
    setTotalArticles(
      articles.filter(
        article =>
          label.title === 'All Articles' ||
          label.title === article.category.title
      )
    )
  }

  const showMoreCards = () => {
    setInitialPagination({
      end: (initialPagination.end += initialPagination.step),
      step: initialPagination.step,
    })
  }

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
        <FiltersContainer
          selectedFilter={selectedFilter}
          handleFilterClick={handleFilterClick}
          categories={categories}
        />

        <NewsCards articles={totalArticles.slice(0, initialPagination.end)} />
        {initialPagination.end < totalArticles.length && (
          <Row pb={[30, 30, 50]}>
            <Column mx="auto" pt={[30, 30, 50]}>
              <Button onClick={showMoreCards}>Show more articles</Button>
            </Column>
          </Row>
        )}
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
