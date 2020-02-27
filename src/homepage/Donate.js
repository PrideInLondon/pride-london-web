import React from 'react'
import { Container, Row, Column } from '../components/grid'
import DonateSectionHeader from './DonateSectionHeader'
import DonateSection from './DonateSection'
import { DonateWrapper, BgDonateWrapper } from './Donate.styles'

const DonateContainer = () => (
  <BgDonateWrapper>
    <Container>
      <Row>
        <Column width={1}>
          <DonateWrapper>
            <DonateSectionHeader />
            <DonateSection />
          </DonateWrapper>
        </Column>
      </Row>
    </Container>
  </BgDonateWrapper>
)

export default DonateContainer
