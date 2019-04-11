import React from 'react'
import DonateSectionHeader from '../../../homepage/components/donateSectionHeader'
import DonateSection from '../../../homepage/components/donateSection'
import { DonateWrapper } from './styles'

const DonateContainter = () => (
  <DonateWrapper>
    <DonateSectionHeader />
    <DonateSection />
  </DonateWrapper>
)

export default DonateContainter
