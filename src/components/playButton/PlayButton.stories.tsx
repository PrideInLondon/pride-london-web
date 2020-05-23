import React from 'react'
import { storiesOf } from '@storybook/react'

import { PlayButton } from './PlayButton'

storiesOf('Play Button', module).add(
  'default',
  () => <PlayButton onClick={() => alert('Button Clicked')} />,
  {
    info: {
      text:
        'Renders a play icon inside an indigo box, and takes an onClick handler to execute click',
    },
  }
)
