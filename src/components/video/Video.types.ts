import { LayoutProps, SpaceProps } from 'styled-system'

export const VIDEO_HOSTS = ['vimeo', 'youtube'] as const

type VideoHost = typeof VIDEO_HOSTS[number]

export interface VideoProps extends LayoutProps, SpaceProps {
  host: VideoHost
  videoId: string
  caption: string
  coverImage: {
    src: string
    alt: string
  }
}
