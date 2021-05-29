import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { VARIANTS } from './Button.types'

storiesOf('Button', module)
  .add(
    'default',
    () => (
      <Button
        onClick={action('click')}
        variant={select('Variant', VARIANTS, VARIANTS[0])}
      >
        {text('Link Text', 'This is a button')}
      </Button>
    ),
    {
      info: {
        text: 'By default the Button component will render an html <button />. You can select one of the styles by passing a `variant` prop.',
      },
    }
  )
  .add(
    'as Gatsby <Link />',
    () => (
      <Button to="/relative-url">{text('Link Text', 'Gatsby Link')}</Button>
    ),
    {
      info: {
        text: 'If given a "to" prop which is a relative URL, it will automatically render a Gatsby <Link /> component',
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
        text: 'If given a "to" prop which is an external URL, it will automatically render a html <a /> tag with the target attribute to open in a new tab and rel (noopener and noreferrer) security attributes.',
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
        text: 'If given a "to" prop which is an contact link (e.g. mailto, tel), it will automatically render a html <a /> tag with the target attribute to open in a new tab.',
      },
    }
  )
  .add(
    'with width / layout props',
    () => (
      <Button
        width={text('Width', '500px')}
        maxWidth={text('Max Width', 'none')}
        minWidth={text('Min Width', 'auto')}
        marginTop={text('Margin Top', '50px')}
        marginRight={text('Margin Right', 'auto')}
        marginBottom={text('Margin Bottom', '50px')}
        marginLeft={text('Margin Left', '0')}
      >
        {text('Button Text', 'This is a button')}
      </Button>
    ),
    {
      info: {
        text: 'You can pass styled-system width props (e.g. minWidth, maxWidth, width) with a valid CSS unit (e.g. % or px) to explicitly set the size of the button. You can also pass styled-system margin props (e.g. marginTop, marginBottom etc) to control the positioning of the button on the page.',
      },
    }
  )
  .add(
    'with responsive width / layout props',
    () => (
      <Button
        width={object('Width', {
          default: '100%',
          sm: '75%',
          md: '50%',
          lg: '25%',
          xl: 'auto',
        })}
        margin={object('Margin', {
          default: '10px',
          sm: '20px',
          md: '30px',
          lg: '40px',
          xl: '50px',
        })}
      >
        {text('Button Text', 'This is a button')}
      </Button>
    ),
    {
      info: {
        text: 'You can pass an object as props with keys that map to the theme breakpoints to apply responsive styles. Media queries are min-width (mobile-first)',
      },
    }
  )
