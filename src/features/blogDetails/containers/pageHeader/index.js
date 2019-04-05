import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Background } from './styles'

const PageHeader = ({ title, headerImage }) => (
  <>
    <Helmet title={title} />
    <Background backgroundImage={headerImage.file.url} />
  </>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
}

export default PageHeader
