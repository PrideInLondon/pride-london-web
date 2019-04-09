import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/title'
import FiltersContainer from '../filtersContainer'
import NewsCards from '../newsCards'
import FeaturedArticleContainer from '../featuredArticleContainer'
import { Container } from './styles'

class NewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFilter: props.categories.find(
        ({ title }) => title === 'All Articles'
      ),
    }
  }

  handleFilterClick = label => {
    this.setState({
      selectedFilter: label,
    })
  }

  render() {
    const { selectedFilter } = this.state
    const { articles, categories } = this.props
    return (
      <div>
        <Container>
          <Title>News</Title>
        </Container>
        <FeaturedArticleContainer />
        <FiltersContainer
          selectedFilter={selectedFilter}
          handleFilterClick={this.handleFilterClick}
          categories={categories}
        />
        <NewsCards selectedFilter={selectedFilter} articles={articles} />
      </div>
    )
  }
}

NewsContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
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
