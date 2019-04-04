import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from '../../components/newsCard'
import { FlexColumn, Row } from '../../../../components/grid'

const NewsCards = ({ selectedFilter, articles }) => {
  return (
    <Row>
      {articles.map(({ date, title, newsCategory, id }) => {
        return selectedFilter.title === 'All Articles' ||
          selectedFilter.title === newsCategory.title ? (
          /* eslint-disable */
          <FlexColumn
            key={id}
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
              1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
          >
            <NewsCard filterType={newsCategory} title={title} date={date} />
          </FlexColumn>
        ) : /* eslint-enable */
        null
      })}
    </Row>
  )
}

NewsCards.propTypes = {
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }),
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
}

NewsCards.defaultProps = {
  selectedFilter: null,
}

export default NewsCards
