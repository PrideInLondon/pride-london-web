import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, number } from '@storybook/addon-knobs'
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

const readme = `

Rough heights to start off with as each svg has a different height, these don't need to be exact and should scale some what

| Rip       | height      | 
| --------- |:-----------:| 
| Rip1     | 150 | 
| Rip2     | 105 | 
| Rip3     | 145 | 
| Rip4     | 130 | 
| Rip5     | 125 | 
`

storiesOf('Torn Background Component', module)
  .add(
    'Top and Bottom tears',
    () => (
      <TornBackground
        topTear={{
          ripType: select('Top Rip Variant', variants, variants.Rip1),
          color: text('Top color', '#000'),
          height: number('Top height', 150),
        }}
        backgroundImage={BackgroundImage}
        bottomTear={{
          ripType: select('Bottom Rip Variant', variants, variants.Rip1),
          color: text('Bottom color', '#fff'),
          height: number('Bottom height', 120),
        }}
        minHeight="400px"
      >
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </p>
      </TornBackground>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'bottom tear',
    () => (
      <TornBackground
        backgroundImage={BackgroundImage}
        bottomTear={{
          ripType: select('Bottom Rip Variant', variants, variants.Rip1),
          color: text('Bottom color', '#fff'),
        }}
        minHeight="400px"
      >
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </p>
      </TornBackground>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'Top tear',
    () => (
      <TornBackground
        topTear={{
          ripType: select('Top Rip Variant', variants, variants.Rip1),
          color: text('Top color', '#000'),
          height: number('Top height', 100),
        }}
        backgroundImage={BackgroundImage}
        minHeight="400px"
      >
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </p>
      </TornBackground>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
