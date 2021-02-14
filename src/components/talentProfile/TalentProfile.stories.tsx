import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { json } from './__mocks__'
import { TalentProfile } from './'

storiesOf('TalentProfile', module).add('default', () => (
  <div style={{ backgroundColor: 'white', padding: 20 }}>
    <TalentProfile
      type={text('type', 'author')}
      title={text('title', 'About the artist')}
      name={text('name', 'Jane Doe')}
      bio={{ json }}
      website={text('website', 'https://prideinlondon.org')}
      email={text('email', 'example@prideinlondon.org')}
      facebook={text('facebook', 'https://facebook.com/PrideinLondon')}
      twitter={text('twitter', 'https://twitter.com/PrideInLondon')}
      instagram={text('instagram', 'https://instagram.com/prideinlondon')}
      maxWidth={600}
    />
  </div>
))
