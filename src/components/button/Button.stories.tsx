import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
// import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  // .add('with URL', () => (
  //   <Button to={text('Link URL', '/')}>
  //     {text('Link Text', 'This is a CTA Link')}
  //   </Button>
  // ))
  .add('demo', () => <div>Hello World</div>)
