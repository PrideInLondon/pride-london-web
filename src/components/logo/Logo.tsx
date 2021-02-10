import React from 'react'
import { colors } from '../../theme/colors'
import { Mono, Rainbow } from './variants'
import { LogoProps } from './Logo.types'

export const Logo: React.FC<LogoProps> = ({ variant, ...props }) =>
  variant === 'rainbow' ? (
    <Rainbow {...props} />
  ) : (
    <Mono fill={colors[variant]} {...props} />
  )
