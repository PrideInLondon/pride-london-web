import React from 'react'
import { text } from '@storybook/addon-knobs'
import { Button } from '../button'
import { Typeform } from './Typeform'

export default {
  title: 'Typeform',
}

export const WithButton = () => (
  <Typeform id={text('Typeform ID', 'RLnK9L')}>
    <Button>Click me</Button>
  </Typeform>
)

WithButton.storyName = 'with Button'
