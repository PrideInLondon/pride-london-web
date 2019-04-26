import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from '../../components/newsCard'
import { FlexColumn, Row, Container } from '../../../../components/grid'

const NewsCards = ({ articles }) => (
  <Container>
    <Row>
      {articles.map(
        ({ datePublished, title, category, id, readTime, slug }) => (
          /* eslint-disable */
          <FlexColumn
            key={id}
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
              1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
            py={[2, 2, 2, 3]}
          >
            <NewsCard
              category={category}
              title={title}
              datePublished={datePublished}
            //   id={id}
              readTime={readTime}
              slug={slug}
            />
          </FlexColumn>
        )
        /* eslint-enable */
      )}
    </Row>
  </Container>
)

NewsCards.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string,
      readTime: PropTypes.number,
      datePublished: PropTypes.string,
      category: PropTypes.shape({
        hexColour: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ).isRequired,
}

export default NewsCards
