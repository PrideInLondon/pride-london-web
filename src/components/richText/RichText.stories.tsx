import React from 'react'
import { storiesOf } from '@storybook/react'
import { RichText } from './RichText'
import { document } from './__mocks__'

storiesOf('RichText', module).add('default', () => (
  <RichText {...{ document }} />
))
