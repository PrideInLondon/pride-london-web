import React from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '../../../grid'
import { GalleryImageDescription, PhotoAuthor } from './styles'

const GalleryImageDetails = ({ description, photographer }) => {
  return (
    <Row mx={0}>
      <Column width={photographer ? [1, 1, 0.6] : [1]} px={0}>
        <GalleryImageDescription>{description}</GalleryImageDescription>
      </Column>
      <Column width={photographer ? [1, 1, 0.4] : [0]} px={0}>
        {photographer && (
          <PhotoAuthor href={photographer.url}>
            By {photographer.name}
          </PhotoAuthor>
        )}
      </Column>
    </Row>
  )
}

GalleryImageDetails.propTypes = {
  description: PropTypes.string,
  photographer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

GalleryImageDetails.defaultProps = {
  description: '',
  photographer: null,
}

export default GalleryImageDetails
