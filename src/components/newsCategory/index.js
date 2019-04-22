import React from 'react'
import PropTypes from 'prop-types'
import { NewsCategoryContainer } from './styles'

export const NewsCategory = ({ category, className }) => (
  <NewsCategoryContainer
    backgroundColor={category.hexColour}
    className={className}
  >
    {category.title}
  </NewsCategoryContainer>
)

NewsCategory.propTypes = {
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
}

NewsCategory.defaultProps = {
  className: '',
}

export default NewsCategory
