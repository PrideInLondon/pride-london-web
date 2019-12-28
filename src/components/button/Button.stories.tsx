import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

const variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Outline: 'outline',
} as const

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'as <button />',
    () => (
      <Button
        onClick={action('click')}
        variant={select('Variant', variants, variants.Primary)}
      >
        {text('Link Text', 'This is a button')}
      </Button>
    ),
    {
      info: {
        text: 'By default the Button component will render an html <button />',
      },
    }
  )
  .add(
    'as Gatsby <Link />',
    () => (
      <Button to="/relative-url" marginTop="100px">
        {text('Link Text', 'Gatsby Link')}
      </Button>
    ),
    {
      info: {
        text:
          'If given a "to" prop which is a relative URL, it will automatically render a Gatsby <Link /> component',
      },
    }
  )
  .add(
    'as external link',
    () => (
      <Button to="https://google.com">
        {text('Link Text', 'External link')}
      </Button>
    ),
    {
      info: {
        text:
          'If given a "to" prop which is an external URL, it will automatically render a html <a /> tag with the target attribute to open in a new tab and rel (noopener and noreferrer) security attributes.',
      },
    }
  )
  .add(
    'as contact link',
    () => (
      <Button to="mailto:test@test.com">
        {text('Link Text', 'Contact us')}
      </Button>
    ),
    {
      info: {
        text:
          'If given a "to" prop which is an contact link (e.g. mailto, tel), it will automatically render a html <a /> tag with the target attribute to open in a new tab.',
      },
    }
  )
