import { colors } from '../../theme/colors'
import { InternalIconProps } from './Icon.types'

import Calendar from './icons/Calendar'
import Laptop from './icons/Laptop'
import Live from './icons/Live'
import OnDemand from './icons/OnDemand'

export const COMPONENTS: { [key: string]: React.FC<InternalIconProps> } = {
  calendar: Calendar,
  laptop: Laptop,
  live: Live,
  'on-demand': OnDemand,
}

export const calculateComponent = (name: string) => COMPONENTS[name]

const COLORS: {
  [key: string]: {
    primary: string
    secondary: string
  }
} = {
  indigo: {
    primary: colors.indigo,
    secondary: colors.white,
  },
  white: {
    primary: colors.white,
    secondary: colors.indigo,
  },
}

export const calculateColors = (variant: string) => COLORS[variant]
