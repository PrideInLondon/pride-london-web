import React from 'react'
import { text, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { VARIANTS } from './Button.types'

export default {
  title: 'Button',
}

export const Default = () => (
  <Button
    onClick={action('click')}
    variant={select('Variant', VARIANTS, VARIANTS[0])}
  >
    {text('Link Text', 'This is a button')}
  </Button>
)

Default.storyName = 'default'
Default.parameters = {
  info: {
    text:
      'By default the Button component will render an html <button />. You can select one of the styles by passing a `variant` prop.',
  },
}

export const AsGatsbyLink = () => (
  <Button to="/relative-url">{text('Link Text', 'Gatsby Link')}</Button>
)

AsGatsbyLink.storyName = 'as Gatsby <Link />'
AsGatsbyLink.parameters = {
  info: {
    text:
      'If given a "to" prop which is a relative URL, it will automatically render a Gatsby <Link /> component',
  },
}

export const AsExternalLink = () => (
  <Button to="https://google.com">{text('Link Text', 'External link')}</Button>
)

AsExternalLink.storyName = 'as external link'
AsExternalLink.parameters = {
  info: {
    text:
      'If given a "to" prop which is an external URL, it will automatically render a html <a /> tag with the target attribute to open in a new tab and rel (noopener and noreferrer) security attributes.',
  },
}

export const AsContactLink = () => (
  <Button to="mailto:test@test.com">{text('Link Text', 'Contact us')}</Button>
)

AsContactLink.storyName = 'as contact link'
AsContactLink.parameters = {
  info: {
    text:
      'If given a "to" prop which is an contact link (e.g. mailto, tel), it will automatically render a html <a /> tag with the target attribute to open in a new tab.',
  },
}

export const WithWidthLayoutProps = () => (
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
)

WithWidthLayoutProps.storyName = 'with width / layout props'
WithWidthLayoutProps.parameters = {
  info: {
    text:
      'You can pass styled-system width props (e.g. minWidth, maxWidth, width) with a valid CSS unit (e.g. % or px) to explicitly set the size of the button. You can also pass styled-system margin props (e.g. marginTop, marginBottom etc) to control the positioning of the button on the page.',
  },
}

export const WithResponsiveWidthLayoutProps = () => (
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
)

WithResponsiveWidthLayoutProps.storyName =
  'with responsive width / layout props'
WithResponsiveWidthLayoutProps.parameters = {
  info: {
    text:
      'You can pass an object as props with keys that map to the theme breakpoints to apply responsive styles. Media queries are min-width (mobile-first)',
  },
}
