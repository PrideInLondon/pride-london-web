import { HTMLAttributes } from 'react'
import { FixedObject } from 'gatsby-image'
import { BackgroundColorProps } from 'styled-system'

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  backgroundColor: string
}

export interface BannerImage {
  desktop: FixedObject
  tablet: FixedObject
  mobile: FixedObject
}

export interface EventsPageBannerProps extends BackgroundColorProps {
  title: string
  subtitle: string
  image: BannerImage
  backgroundColor: string
}
