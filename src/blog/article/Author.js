import React from 'react'
import PropTypes from 'prop-types'
import {
  Thumbnail,
  AuthorCard,
  AuthorInfo,
  FullName,
  Job,
} from './Author.styles'

const Author = ({ author }) => (
  <AuthorCard>
    {author.thumbnail && <Thumbnail src={author.thumbnail.file.url} />}
    <AuthorInfo>
      <FullName>{author.displayName}</FullName>
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
    displayName: PropTypes.string,
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
    displayName: 'FullName',
    jobTitle: 'Job Title',
  },
}

export default Author
