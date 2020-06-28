import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, number } from '@storybook/addon-knobs'
import { H2, P } from '../typography/Typography'
import { ExampleBackgroundImage } from './TornBackground.styles'
import { TornBackground } from './TornBackground'
const variants = {
  Rip1: 1,
  Rip2: 2,
  Rip3: 3,
  Rip4: 4,
  Rip5: 5,
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
          color: text('Top color', '#fff'),
          height: number('Top height', 150),
        }}
        bottomTear={{
          ripType: select('Bottom Rip Variant', variants, variants.Rip1),
          color: text('Bottom color', '#fff'),
          height: number('Bottom height', 120),
        }}
        BackgroundComponent={ExampleBackgroundImage}
      >
        <H2 color="black">Test</H2>
        <P color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </P>
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
        bottomTear={{
          ripType: select('Bottom Rip Variant', variants, variants.Rip1),
          color: text('Bottom color', '#fff'),
        }}
        BackgroundComponent={ExampleBackgroundImage}
      >
        <H2 color="black">Test</H2>
        <P color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </P>
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
          color: text('Top color', '#fff'),
          height: number('Top height', 100),
        }}
        BackgroundComponent={ExampleBackgroundImage}
      >
        <H2 color="black">Test</H2>
        <P color="black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          reiciendis! Aliquam molestias quis eum magni ullam unde impedit facere
          nostrum. Facere animi dolore ea sunt, laboriosam tenetur enim ducimus
          voluptatem.
        </P>
      </TornBackground>
    ),
    {
      info: {
        text: readme,
      },
    }
  )
