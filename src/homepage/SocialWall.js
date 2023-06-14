import React from 'react'
import { Container, Row, Column } from '../components/grid'
import SocialWallSectionHeader from './SocialWallSectionHeader'
import SocialSection from './SocialSection'
import { DonateWrapper, BgDonateWrapper } from './Donate.styles'

const Donate = () => (
  <BgDonateWrapper>
    <Container>
      <Row>
        <Column width={1}>
          {/* <DonateWrapper> */}
            <SocialWallSectionHeader />
            <SocialSection />
          {/* </DonateWrapper> */}
        </Column>
      </Row>
    </Container>
  </BgDonateWrapper>
)

export default Donate
