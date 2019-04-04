import React from 'react'
import PropTypes from 'prop-types'
import LatestNewsCard from './latestNewsCard'
import { Background, LatestNewsCardContainer } from './styles'

const LatestNews = ({ date, readLength, newsCategory, title, images }) => (
  <Background backgroundImage={images[0].file.url}>
    <LatestNewsCardContainer>
      <LatestNewsCard
        newsCategory={newsCategory}
        title={title}
        date={date}
        readLength={readLength}
      />
    </LatestNewsCardContainer>
  </Background>
)

LatestNews.propTypes = {
  date: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  newsCategory: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}

LatestNews.defaultProps = {
  readLength: null,
}

export default LatestNews
