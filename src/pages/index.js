import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { Column } from '../components/grid'

const ColumnTextCenter = styled(Column)`
  text-align: center;
  width: fit-content;
`

const Home = ({ data: { contentfulHeaderBanner } }) => (
  <Fragment>
    <ImageBanner
      titleText={contentfulHeaderBanner.heading}
      subtitleText={contentfulHeaderBanner.subHeading}
      imageSrc={
        contentfulHeaderBanner && contentfulHeaderBanner.heroImage.file.url
      }
      altText={contentfulHeaderBanner.heroImage.title}
      color={contentfulHeaderBanner.backgroundColour}
      large="true"
    >
      <ColumnTextCenter>
        <Button wide={false} primary link to="/events/">
          Find out more
        </Button>
      </ColumnTextCenter>
    </ImageBanner>
  </Fragment>
)

export default Home

Home.propTypes = {
  data: PropTypes.object,
}

Home.defaultProps = {
  data: {},
}

export const homePageQuery = graphql`
  query contentfulHeaderBanner {
    contentfulHeaderBanner {
      title
      heading
      headingLine2
      backgroundColour
      heroImage {
        file {
          url
          fileName
          contentType
        }
        title
      }
      subHeading
    }
  }
`
