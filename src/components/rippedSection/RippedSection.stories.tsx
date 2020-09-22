import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, color, files } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import logo from '../../assets/logo.png'
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
  >
    <div style={{ height: 400 }} />
  </RippedSection>
))

storiesOf(RippedSection.name, module).add('Top variant', () => (
  <RippedSection
    rips={{
      top: {
        variant: select('Top Rip Variant', variants, variants[0]),
        color: color('Top Rip Color', colors.white),
      },
    }}
  >
    <div style={{ height: 400 }} />
  </RippedSection>
))

storiesOf(RippedSection.name, module).add('Bottom variant', () => (
  <RippedSection
    rips={{
      bottom: {
        variant: select('Bottom Rip Variant', variants, variants[0]),
        color: color('Bottom Rip Color', colors.white),
      },
    }}
  >
    <div style={{ height: 400 }} />
  </RippedSection>
))

storiesOf(RippedSection.name, module).add('With background image', () => (
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
    maxWidth={550}
  >
    <img
      src={files('fixed', '.jpg, .png', [logo], 'image')[0]}
      alt="Example for Storybook"
    />
  </RippedSection>
))
