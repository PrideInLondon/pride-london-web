import React from 'react'
import PropTypes from 'prop-types'
import { StyledFigure } from './Figure.styles'

const Figure = ({ file, title, description }) => (
  <StyledFigure>
    <img src={file['en-GB'].url} alt={title && title['en-GB']} />
    {description && <figcaption>{description['en-GB']}</figcaption>}
  </StyledFigure>
)

Figure.propTypes = {
  file: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object,
}

Figure.defaultProps = {
  description: null,
}

export default Figure
