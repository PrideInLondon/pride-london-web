import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from '../../components/newsCard'
import {
  ALL_ARTICLES,
  NEWS,
  RESEARCH,
  ANNOUNCEMENTS,
  PARTNERS,
} from '../../components/newsFilter/config'
import { FlexColumn, Row } from '../../../../components/grid'

const mockNews = [
  {
    type: RESEARCH,
  },
  {
    type: NEWS,
  },
  {
    type: NEWS,
  },
  {
    type: RESEARCH,
  },
  {
    type: ANNOUNCEMENTS,
  },
  {
    type: PARTNERS,
  },
]

const NewsCards = ({ selectedFilter }) => {
  return (
    <Row>
      {mockNews.map((article, index) => {
        return selectedFilter === ALL_ARTICLES ||
          selectedFilter === article.type ? (
          /* eslint-disable */
          <FlexColumn
            key={index}
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
              1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
          >
            <NewsCard type={article.type} />
          </FlexColumn>
        ) : /* eslint-enable */
        null
      })}
    </Row>
  )
}

NewsCards.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
}

export default NewsCards
