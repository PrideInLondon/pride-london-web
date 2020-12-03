import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { TalentProfile } from './'

storiesOf('TalentProfile', module).add('default', () => (
  <TalentProfile
    name={text('name', 'Lorem ipsum')}
    website={text('website', 'https://prideinlondon.org')}
    email={text('email', 'example@prideinlondon.org')}
    facebook={text('facebook', 'https://facebook.com/PrideinLondon')}
    twitter={text('twitter', 'https://twitter.com/PrideInLondon')}
    instagram={text('instagram', 'https://instagram.com/prideinlondon')}
  />
))
