import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/title'
import ImageBanner from '../../../../components/imageBanner'
import theme from '../../../../theme/theme'
import FiltersContainer from '../filtersContainer'
import NewsCards from '../newsCards'
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
        <ImageBanner
          altText=""
          color={theme.colors.beachBlue}
          allowContentUnderflow
        />
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
      filterType: PropTypes.shape({
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
