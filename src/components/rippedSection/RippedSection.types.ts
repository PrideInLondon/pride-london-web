import { LayoutProps, SpaceProps } from 'styled-system'
import { Rip } from './Rip.types'

export interface RippedSectionProps extends LayoutProps, SpaceProps {
  rips?: {
    top?: Rip
    bottom?: Rip
  }
}
