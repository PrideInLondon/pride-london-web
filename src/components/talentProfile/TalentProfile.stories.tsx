import React from 'react'
import { storiesOf } from '@storybook/react'
import { TalentProfile } from './'

storiesOf('TalentProfile', module).add('default', () => (
  <TalentProfile
    name="Lorem ipsum"
    website="a"
    email="b"
    facebook="c"
    twitter="d"
    instagram="e"
  />
))
