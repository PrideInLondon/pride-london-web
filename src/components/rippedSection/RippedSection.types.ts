import { LayoutProps } from 'styled-system'
import { Rip } from './Rip.types'

export interface RippedSectionProps extends LayoutProps {
  rips?: {
    top?: Rip
    bottom?: Rip
  }
}
