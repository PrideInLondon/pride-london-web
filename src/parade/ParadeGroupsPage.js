import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Banner } from '../components/banner'
import { media } from '../theme/media'
import constants from '../constants'
import bannerBackground from './bannerBackground.jpg'
import ParadeGroups from './ParadeGroups'

const Container = styled.div`
  position: relative;
  min-height: 500px;

  ${media.tablet`
    max-width: 70%;
    padding: 80px;
  `}
`

const TextContainer = styled.div`
  padding: 20px;
`

const mapEntries = (paradeGroups) => {
  if (!paradeGroups.edges || !Array.isArray(paradeGroups.edges)) return []
  return paradeGroups.edges.map(({ node }) => ({ ...node }))
}

const ParadeGroupsPage = ({ data: { paradeGroups } }) => (
  <>
    <Banner
      titleText="Parade groups"
      subtitleText="Find out more about the groups who are marching in this years parade"
      altText="Parade groups"
      imageSrc={bannerBackground}
      imageFullWidth
    />
    <Container>
      <TextContainer>
        The parade celebrates our colourful community, brightening up the
        streets of London with people from every walk of life. In 2023, we
        expect around 35,000 individuals to march together for love, protest and
        activism. Formed from over 600 groups - more than half of which
        represented charities or not-for-profit organisations - we’re proud that
        last year’s Pride was our most diverse yet, uniting more trans*, BAME
        and bisexual communities than ever before.
      </TextContainer>
      <TextContainer>
        If any information is incorrectly updated, please fill up{' '}
        <a href="https://forms.gle/aFcKeJMQrXbNKNxA6">this form</a> and we will
        update the information as soon as possible.
      </TextContainer>
      <ParadeGroups
        paradeGroups={mapEntries(paradeGroups)}
        categories={constants.paradeGroupCategories}
      />
    </Container>
  </>
)

ParadeGroupsPage.propTypes = {
  data: PropTypes.shape({
    paradeGroups: PropTypes.any,
  }).isRequired,
}

export default ParadeGroupsPage
