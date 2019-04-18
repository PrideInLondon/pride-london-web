import React from 'react'
import PropTypes from 'prop-types'
import { StyledFigure } from './styles'

const Figure = ({ file, description }) => (
  <StyledFigure>
    <img src={file['en-GB'].url} alt={description && description['en-GB']} />
    {description && <figcaption>{description['en-GB']}</figcaption>}
  </StyledFigure>
)

Figure.propTypes = {
  file: PropTypes.object.isRequired,
  description: PropTypes.object,
}

Figure.defaultProps = {
  description: null,
}

export default Figure
