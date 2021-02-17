import React from 'react'
import { Wrapper } from '../wrapper'
import { RippedSectionProps } from './RippedSection.types'
import { Rip } from './Rip'

export const RippedSection: React.FC<RippedSectionProps> = ({
  rips: { top, bottom } = {},
  children,
  ...props
}) => (
  <Wrapper
    as="section"
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    {top && <Rip transform="top" {...top} />}
    {children}
    {bottom && <Rip transform="bottom" {...bottom} />}
  </Wrapper>
)
