import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Quote } from './Quote'

const quoteText =
  'Aliquam condimentum velit vitae elit suscipit pharetra. Maecenas venenatis purus sed dolor ornare vehicula orci nulla magna.'
storiesOf('Quote', module).add('default', () => (
  <Quote
    quote={text('quoteText', quoteText)}
    caption={text('Caption Text', 'Person')}
  />
))
