import React from 'react'
import {
  BadgesContainer,
  TitleWrapper,
  Title,
} from './SponsorsSubSection.styles'
import { SponsorsSubSectionProps } from './SponsorsSubSection.types'

const SponsorsSubSection: React.FC<SponsorsSubSectionProps> = ({
  title,
  icon,
  children,
}) => (
  <>
    <TitleWrapper>
      {icon}
      {title && <Title>{title}</Title>}
    </TitleWrapper>
    <BadgesContainer>{children}</BadgesContainer>
  </>
)

export default SponsorsSubSection
