import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { json } from './__mocks__'
import { TalentProfile } from './'

const socials = {
  website: text('website', 'https://prideinlondon.org'),
  email: text('email', 'example@prideinlondon.org'),
  facebook: text('facebook', 'https://facebook.com/PrideinLondon'),
  twitter: text('twitter', 'https://twitter.com/PrideInLondon'),
  instagram: text('instagram', 'https://instagram.com/prideinlondon'),
}

const StoryWrapper: React.FC<{}> = ({ children }) => (
  <div style={{ backgroundColor: 'white', padding: 20 }}>{children}</div>
)

storiesOf('TalentProfile', module)
  .add('default', () => (
    <StoryWrapper>
      <TalentProfile
        title={text('title', 'About the artist')}
        talent={{
          name: text('name', 'Jane Doe'),
          bio: { json },
          ...socials,
        }}
        maxWidth={600}
      />
    </StoryWrapper>
  ))
  .add('without bio', () => (
    <StoryWrapper>
      <TalentProfile
        title={text('title', 'About the artist')}
        talent={{
          name: text('name', 'Jane Doe'),
          ...socials,
        }}
        maxWidth={600}
      />
    </StoryWrapper>
  ))
  .add('without social links', () => (
    <StoryWrapper>
      <TalentProfile
        title={text('title', 'About the artist')}
        talent={{
          name: text('name', 'Jane Doe'),
          bio: { json },
        }}
        maxWidth={600}
      />
    </StoryWrapper>
  ))
