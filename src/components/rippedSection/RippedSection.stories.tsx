import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, color } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { H2, P } from '../typography/Typography'
import { RippedSection } from './RippedSection'
import { RipVariant } from './Rip.types'

const variants: RipVariant[] = [1, 2, 3, 4, 5]

storiesOf(RippedSection.name, module).add('Top and Bottom variants', () => (
  <RippedSection
    rips={{
      top: {
        variant: select('Top Rip Variant', variants, variants[0], 'Top Rip'),
        color: color('Top Rip Color', colors.white, 'Top Rip'),
      },
      bottom: {
        variant: select(
          'Bottom Rip Variant',
          variants,
          variants[0],
          'Bottom Rip'
        ),
        color: color('Bottom Rip Color', colors.white, 'Bottom Rip'),
      },
    }}
    height="400px"
  >
    <H2>Pride in London</H2>
    <P>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reiciendis!
      Aliquam molestias quis eum magni ullam unde impedit facere nostrum. Facere
      animi dolore ea sunt, laboriosam tenetur enim ducimus voluptatem.
    </P>
  </RippedSection>
))
