import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { Column, Row, Container } from '../components/grid'
import BannerImage from '../components/banner/bannerImage'

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

const responsiveBannerUrl = url => {
  if (typeof window === 'undefined') {
    return null
  }

  const width = Math.min(window.innerWidth, 1440)
  return `${url}?w=${width}`
}

// eslint-disable-next-line react/prefer-stateless-function
export default class GenericContentPage extends Component {
  render() {
    const {
      title,
      subtitle,
      bannerImage,
      bannerColor,
      content: { content },
    } = this.props.data.contentfulGenericContentPage

    return (
      <Fragment>
        <Helmet title={title} />
        <BannerImage
          titleText={title}
          subtitleText={subtitle}
          imageSrc={bannerImage && responsiveBannerUrl(bannerImage.file.url)}
          color={bannerColor ? bannerColor : theme.colors.beachBlue}
          imageFullWidth
        />
        <PageWrapper>
          <Container>
            <Row>
              <Content width={[1, 1, 0.8]}>
                <ReactMarkdown source={content} />
              </Content>
            </Row>
          </Container>
        </PageWrapper>
      </Fragment>
    )
  }
}

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
      }
      bannerColor
      content {
        content
      }
    }
  }
`
