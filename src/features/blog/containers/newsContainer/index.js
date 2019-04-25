import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/title'
import FiltersContainer from '../filtersContainer'
import NewsCards from '../newsCards'
import FeaturedArticleContainer from '../featuredArticleContainer'
import {
  Container,
  FlexColumn,
  Column,
  Row,
  GreyWrapper,
} from '../../../../components/grid'
import { ShowMoreButton } from './styles'

const initialPaginationState = {
  end: 9,
  step: 9,
}
class NewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFilter: props.categories.find(
        ({ title }) => title === 'All Articles'
      ),
      ...initialPaginationState,
      total: props.articles,
    }
  }

  handleFilterClick = label => {
    this.setState((_state, props) => ({
      selectedFilter: label,
      ...initialPaginationState,
      total: props.articles.filter(
        article =>
          label.title === 'All Articles' ||
          label.title === article.category.title
      ),
    }))
  }

  showMoreCards = () => {
    this.setState(state => ({
      end: (state.end += state.step),
    }))
  }

  render() {
    const { selectedFilter, end, total } = this.state
    const { categories } = this.props
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
            handleFilterClick={this.handleFilterClick}
            categories={categories}
          />

          <NewsCards articles={total.slice(0, end)} />
          {end < total.length && (
            <Row>
              <FlexColumn width={[1, 1, 1, 1]}>
                <ShowMoreButton onClick={this.showMoreCards} primary>
                  Show more articles
                </ShowMoreButton>
              </FlexColumn>
            </Row>
          )}
        </GreyWrapper>
      </section>
    )
  }
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
