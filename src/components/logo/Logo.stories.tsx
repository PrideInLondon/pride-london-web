import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { Logo } from './Logo'
import { VARIANTS } from './Logo.types'

storiesOf(Logo.name, module).add('default', () => (
  <Logo variant={select('variant', VARIANTS, VARIANTS[0])} />
))
