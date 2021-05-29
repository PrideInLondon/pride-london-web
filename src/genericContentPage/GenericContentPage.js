import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { Column, Row, Container } from '../components/grid'
import { Banner } from '../components/banner'
import GenericContent from './GenericContent'

const PageWrapper = styled.div`
  position: relative;
`

const Content = styled(Column)`
  padding-top: 30px;
  padding-bottom: 50px;

  hr {
    margin: 20px 0px;
    border: none;
    border-top: 1px solid #e0e0e0;
  }

  ${media.tablet`
    padding-top: 40px;
    padding-bottom: 60px;

  `};
  ${media.desktop`
    padding-top: 60px;
    padding-bottom: 90px;
  `};
`

const responsiveBannerUrl = (url) => {
  const defaultImageWidth = 1440

  if (typeof window === 'undefined') {
    return `${url}?w=${defaultImageWidth}`
  }

  const width = Math.min(window.innerWidth, defaultImageWidth)
  return `${url}?w=${width}`
}

const GenericContentPage = ({
  data: {
    contentfulGenericContentPage: {
      title,
      subtitle,
      bannerImage,
      bannerColor,
      content: { json },
    },
  },
}) => (
  <>
    <Helmet title={title} />
    <Banner
      titleText={title}
      subtitleText={subtitle}
      imageSrc={bannerImage && responsiveBannerUrl(bannerImage.file.url)}
      color={bannerColor || theme.colors.beachBlue}
      imageFullWidth
      fixed={bannerImage}
    />
    <PageWrapper>
      <Container>
        <Row>
          <Content width={[1, 1, 0.666]}>
            <GenericContent content={json} />
          </Content>
        </Row>
      </Container>
    </PageWrapper>
  </>
)

GenericContentPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query genericContentPageQuery($id: String!) {
    contentfulGenericContentPage(id: { eq: $id }) {
      id
      title
      subtitle
      bannerImage {
        id
        file {
          url
        }
        desktop: fixed(
          width: 1600
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        tablet: fixed(
          width: 800
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        mobile: fixed(
          width: 400
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      bannerColor
      content {
        json
      }
    }
  }
`

export default GenericContentPage
