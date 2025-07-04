import React from 'react'
import PropTypes from 'prop-types'
import Star from '../../components/icons/star'
import { NewsCategoryContainer, StarWrapper } from './NewsCategory.styles'

export const NewsCategory = ({ category, className }) => {
  return (
    <NewsCategoryContainer
     // backgroundColor={category.hexColour}
      className={className}
    >
      {category.title === 'Featured' && (
        <StarWrapper>
          <Star />
        </StarWrapper>
      )}
      {category.title}
    </NewsCategoryContainer>
  )
}
NewsCategory.propTypes = {
  category: PropTypes.shape({
   // hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
}

NewsCategory.defaultProps = {
  className: '',
}

export default NewsCategory
