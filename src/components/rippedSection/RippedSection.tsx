import React from 'react'
import {
  // ResponsiveImg,
  // Background,
  StyledSection,
  // AbsoluteTornSection,
} from './RippedSection.styles'
import { RippedSectionProps } from './RippedSection.types'
import { Rip } from './Rip'

export const RippedSection: React.FC<RippedSectionProps> = ({
  rips: { top, bottom } = {},
  children,
  ...props
}) => (
  <StyledSection {...props}>
    {top && <Rip transform="top" {...top} />}
    <div
      style={{
        height: 400,
        width: '100%',
      }}
    >
      {children}
    </div>
    {bottom && <Rip transform="bottom" {...bottom} />}
  </StyledSection>
)
