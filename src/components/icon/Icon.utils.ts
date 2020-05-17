import { colors } from '../../theme/colors'
import { InternalIconProps } from './Icon.types'

import {
  Calendar,
  Email,
  Facebook,
  Laptop,
  LinkedIn,
  Live,
  Messenger,
  OnDemand,
  Twitter,
} from './icons'

export const COMPONENTS: { [key: string]: React.FC<InternalIconProps> } = {
  calendar: Calendar,
  email: Email,
  facebook: Facebook,
  laptop: Laptop,
  'linked-in': LinkedIn,
  live: Live,
  messenger: Messenger,
  'on-demand': OnDemand,
  twitter: Twitter,
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
    secondary: colors.eucalyptusGreen,
  },
  white: {
    primary: colors.white,
    secondary: colors.eucalyptusGreen,
  },
}

export const calculateColors = (variant: string) => COLORS[variant]
