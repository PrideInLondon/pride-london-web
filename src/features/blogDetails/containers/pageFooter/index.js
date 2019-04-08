import React from 'react'
import PropTypes from 'prop-types'
import OtherArticles from '../otherArticles'

const PageFooter = ({ otherArticles }) => (
  <OtherArticles otherArticles={otherArticles} />
)

PageFooter.propTypes = {
  otherArticles: PropTypes.object.isRequired,
}

export default PageFooter
