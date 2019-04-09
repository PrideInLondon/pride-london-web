import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail, AuthorCard, AuthorInfo, FullName, Job } from './styles'

const Author = ({ author }) => (
  <AuthorCard>
    <Thumbnail src={author.imageSrc} />
    <AuthorInfo>
      <FullName>{author.display_name.display_name}</FullName>
      <Job>Job Title</Job>
    </AuthorInfo>
  </AuthorCard>
)

Author.propTypes = {
  author: PropTypes.object,
}

Author.defaultProps = {
  author: {
    imageSrc: 'imageSrc',
    display_name: {
      display_name: 'FullName',
    },
  },
}

export default Author
