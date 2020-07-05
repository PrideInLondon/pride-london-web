import React from 'react'
import { storiesOf } from '@storybook/react'
import { colors } from '../../theme/colors'
import { md } from '../../theme/space'
import { Divider } from './Divider'

storiesOf('Divider', module).add('default', () => (
  <div style={{ backgroundColor: colors.white, padding: md }}>
    <Divider marginY="xl" />
  </div>
))
