import { WrapperProps } from '../wrapper/Wrapper.types'
import { Rip } from './Rip.types'

export interface RippedSectionProps extends WrapperProps {
  rips?: {
    top?: Rip
    bottom?: Rip
  }
}
