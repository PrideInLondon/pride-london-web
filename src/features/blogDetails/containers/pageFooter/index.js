import React from 'react'
import PropTypes from 'prop-types'
import OtherArticles from '../otherArticles'

const PageFooter = ({ otherArticles, categories }) => (
  <OtherArticles otherArticles={otherArticles} categories={categories} />
)

PageFooter.propTypes = {
  otherArticles: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}

export default PageFooter
