import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { checkBreakpoint } from '../../../../utilities'
import { Background, BackgroundImage } from './styles'

const PageHeader = ({ title, headerImage }) => (
  <>
    <Helmet title={title} />
    <Background fixed={headerImage}>
      <BackgroundImage
        aria-hidden="true"
        objectFit="cover"
        objectPosition="50% 50%"
        fixed={
          !checkBreakpoint(400)
            ? headerImage.mobile
            : !checkBreakpoint(800)
            ? headerImage.tablet
            : headerImage.desktop
        }
        role="presentation"
      />
    </Background>
  </>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    mobile: PropTypes.any,
    tablet: PropTypes.any,
    desktop: PropTypes.any,
  }).isRequired,
}

export default PageHeader
