import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import sampleBackground from './fixture/Background.png'
import TornBackground from '.'

const variants = {
  Rip1: 1,
  Rip2: 2,
  Rip3: 3,
  Rip4: 4,
  Rip5: 5,
}

const BackgroundImage = {
  src: sampleBackground,
}

storiesOf('Torn Background Component', module).add(
  'Top and Bottom tears',
  () => (
    <TornBackground
      topTear={{
        ripType: select('Top Rip Variant', variants, variants.Rip1),
        color: text('Top color', '#fff'),
      }}
      backgroundImage={BackgroundImage}
      bottomTear={{
        ripType: select('Bottom Rip Variant', variants, variants.Rip1),
        color: text('Bottom color', '#fff'),
      }}
      minHeight="400px"
    >
      <h1>Test</h1>
    </TornBackground>
  ),
  {
    info: {
      text: 'to be writtem',
    },
  }
)
