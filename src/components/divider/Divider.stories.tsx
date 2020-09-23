import React from 'react'
import { colors } from '../../theme/colors'
import { md } from '../../theme/space'
import { Divider } from './Divider'

export default {
  title: 'Divider',
}

export const Default = () => (
  <div style={{ backgroundColor: colors.white, padding: md }}>
    <Divider marginY="xl" />
  </div>
)

Default.story = {
  name: 'default',
}
