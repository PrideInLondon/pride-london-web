import React, { Component } from 'react'
import Title from '../../components/title'
import ImageBanner from '../../../../components/imageBanner'
import theme from '../../../../theme/theme'
import FiltersContainer from '../filtersContainer'
import NewsCards from '../newsCards'
import { ALL_ARTICLES } from '../../components/newsFilter/config'
import { Container } from './styles'

class NewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedFilter: ALL_ARTICLES,
    }
  }

  handleFilterClick = label => {
    this.setState({
      selectedFilter: label,
    })
  }

  render() {
    const { selectedFilter } = this.state
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
        />
        <NewsCards selectedFilter={selectedFilter} />
      </div>
    )
  }
}

export default NewsContainer
