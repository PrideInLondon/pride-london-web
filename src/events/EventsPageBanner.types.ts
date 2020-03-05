import { BackgroundColorProps } from 'styled-system'
import { FixedObject } from 'gatsby-image'
import { BannerImage } from '../components/banner/Banner.types'

export interface EventsPageBannerProps extends BackgroundColorProps {
  title: string
  subtitle: string
  image: BannerImage
  sponsor: { fixed: FixedObject }
  backgroundColor: string
}
