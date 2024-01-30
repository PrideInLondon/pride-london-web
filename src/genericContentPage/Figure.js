import React from 'react'
import PropTypes from 'prop-types'
import { StyledFigure, StyledFigure2 } from './Figure.styles'

// const Figure = ({ file, title, description }) => (
//   <StyledFigure>
//     <img src={file['en-GB'].url} alt={title && title['en-GB']} />
//     {description && <figcaption>{description['en-GB']}</figcaption>}
//   </StyledFigure>
// )

const isFirstCharQuestionMark = (str) => str !== '' && str.charAt(0) === '?'

const Figure = ({ file, title, description }) => {
  // if (isFirstCharQuestionMark(description['en-GB'])) {
  //   const modifier = description['en-GB']
  //   return (
  //     <StyledFigure2>
  //       <img src={`${file['en-GB'].url}`} alt={title && title['en-GB']} />
  //     </StyledFigure2>
  //   )
  // }
  return (
    <StyledFigure>
      <img src={`${file['en-GB'].url}`} alt={title && title['en-GB']} />
      {description && <figcaption>{description['en-GB']}</figcaption>}
    </StyledFigure>
  )
}
Figure.propTypes = {
  file: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object,
}

Figure.defaultProps = {
  description: null,
}

export default Figure
