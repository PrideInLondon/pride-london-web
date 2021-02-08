import { SVGProps } from 'react'

export const VARIANTS = ['indigo', 'rainbow', 'white'] as const

type LogoVariant = typeof VARIANTS[number]

export interface LogoProps extends SVGProps<SVGSVGElement> {
  variant: LogoVariant
}
