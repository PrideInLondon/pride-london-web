import React from 'react'
import DonateSectionHeader from '../../../homepage/components/donateSectionHeader'
import DonateSection from '../../../homepage/components/donateSection'
import { Container, Row, Column } from '../../../../components/grid'
import { DonateWrapper, BgDonateWrapper } from './styles'

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
