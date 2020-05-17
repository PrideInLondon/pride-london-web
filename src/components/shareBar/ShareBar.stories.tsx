import React from 'react'
import { storiesOf } from '@storybook/react'
import { ShareBar } from './ShareBar'

storiesOf('ShareBar', module)
  .add('horizontal', () => <ShareBar variant="horizontal" />)
  .add('vertical', () => <ShareBar variant="vertical" />)
