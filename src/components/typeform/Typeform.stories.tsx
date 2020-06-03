import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Button } from '../button'
import { Typeform } from './Typeform'

storiesOf(Typeform.name, module).add('with Button', () => (
  <Typeform id={text('Typeform ID', 'RLnK9L')}>
    <Button>Click me</Button>
  </Typeform>
))
