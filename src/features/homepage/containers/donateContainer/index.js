import React from 'react'
import DonateSectionHeader from '../../../homepage/components/donateSectionHeader'
import DonateSection from '../../../homepage/components/donateSection'
import { Container, Row, Column } from '../../../../components/grid'
import { DonateWrapper } from './styles'

const DonateContainer = () => (
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
)

export default DonateContainer
