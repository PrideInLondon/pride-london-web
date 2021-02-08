import { ResponsiveValue } from 'styled-system'

export const VARIANTS = ['indigo', 'rainbow', 'white'] as const

type LogoVariant = typeof VARIANTS[number]

export interface LogoProps {
  variant: ResponsiveValue<LogoVariant>
}
