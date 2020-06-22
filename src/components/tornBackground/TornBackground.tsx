import React from 'react'
import { FixedObject } from 'gatsby-image'
import {
  ResponsiveImg,
  Background,
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
  backgroundImage?: FixedObject
  topTear?: TearObject
  bottomTear?: TearObject
  minHeight: string
}
const TornBackground: React.FC<TornBackgroundProps> = ({
  backgroundImage,
  topTear = {},
  bottomTear = {},
  children,
  minHeight,
}) => {
  return (
    <RelativeTornSection>
      {topTear.ripType && (
        <Tear
          variant="top"
          ripType={bottomTear.ripType}
          color={bottomTear.color}
          height={bottomTear.height}
          marginTop={-(bottomTear.height || 0)}
          aria-hidden="true"
        />
      )}
      <AbsoluteTornSection> {children}</AbsoluteTornSection>
      {backgroundImage && (
        <ResponsiveImg
          alt=""
          objectFit="cover"
          objectPosition="50% 50%"
          fixed={backgroundImage}
        />
      )}
      <Background height={minHeight}></Background>
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
