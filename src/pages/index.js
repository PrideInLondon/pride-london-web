import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { Column, Container, Row } from '../components/grid'
import volunteerBg from '../theme/assets/images/volunteer-bg.jpg'
import VolunteerBoxInfo from '../features/homepage/components/volunteerBoxInfo'

const ColumnTextCenter = styled(Column)`
  text-align: center;
  width: fit-content;
`

const SectionVolunteer = styled.div`
  width: 100%;
  background: url(${volunteerBg}) no-repeat;
  padding-top: 18%;
  padding-bottom: 50px;
  background-size: contain;
  display: block;
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

    <SectionVolunteer>
      <Container>
        <Row>
          <VolunteerBoxInfo />
        </Row>
      </Container>
    </SectionVolunteer>
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
