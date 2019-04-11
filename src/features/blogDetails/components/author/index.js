import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail, AuthorCard, AuthorInfo, FullName, Job } from './styles'

const Author = ({ author }) => (
  <AuthorCard>
    {author.thumbnail && <Thumbnail src={author.thumbnail.file.url} />}
    <AuthorInfo>
      <FullName>{author.display_name.display_name}</FullName>
      {author.jobTitle && <Job>{author.jobTitle}</Job>}
    </AuthorInfo>
  </AuthorCard>
)

Author.propTypes = {
  author: PropTypes.shape({
    thumbnail: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    display_name: PropTypes.shape({
      display_name: PropTypes.string,
    }),
    jobTitle: PropTypes.string,
  }),
}
Author.defaultProps = {
  author: {
    thumbnail: {
      file: {
        url: 'imgSrc',
      },
    },
    display_name: {
      display_name: 'FullName',
    },
    jobTitle: 'Job Title',
  },
}

export default Author
