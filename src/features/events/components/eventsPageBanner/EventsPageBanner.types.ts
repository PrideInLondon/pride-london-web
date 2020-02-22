import { HTMLAttributes } from 'react'
import { BackgroundColorProps } from 'styled-system'
import { BannerImage } from '../../../../components/banner/Banner.types'

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  backgroundColor: string
}

export interface EventsPageBannerProps extends BackgroundColorProps {
  title: string
  subtitle: string
  image: BannerImage
  backgroundColor: string
}
