import React from 'react'

import {
  RelativeTornSection,
  AbsoluteTornSection,
} from './TornBackground.styles'

import Tear from './tears/Tears'

interface TearObject {
  ripType?: number
  color?: string
  height?: number
}
interface TornBackgroundProps {
  BackgroundComponent?: React.FC
  topTear?: TearObject
  bottomTear?: TearObject
}
const TornBackground: React.FC<TornBackgroundProps> = ({
  BackgroundComponent,
  topTear = {},
  bottomTear = {},
  children,
}) => {
  return (
    <RelativeTornSection>
      {topTear.ripType && (
        <Tear
          variant="top"
          ripType={topTear.ripType}
          color={topTear.color}
          height={topTear.height}
          marginTop={-(topTear.height || 0)}
          aria-hidden="true"
        />
      )}
      <AbsoluteTornSection> {children}</AbsoluteTornSection>
      {BackgroundComponent && <BackgroundComponent />}
      {/* When there are no children the  bottom tear doesn't display without*/}
      {!children && <p></p>}
      {bottomTear && (
        <Tear
          variant="bottom"
          ripType={bottomTear.ripType}
          color={bottomTear.color}
          height={bottomTear.height}
          aria-hidden="true"
        />
      )}
    </RelativeTornSection>
  )
}

export { TornBackground }
