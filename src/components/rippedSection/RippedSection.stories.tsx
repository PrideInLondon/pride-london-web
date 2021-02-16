import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, files } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import logo from '../../assets/logo.png'
import { RippedSection } from './RippedSection'
import { VARIANTS, RipVariant } from './Rip.types'

const initial: { [key: string]: RipVariant | undefined } = { random: undefined }

const variants = VARIANTS.reduce((result, item) => {
  result[item] = item
  return result
}, initial)

const COLORS = Object.keys(colors).sort()

storiesOf(RippedSection.name, module).add('Top and Bottom variants', () => (
  <RippedSection
    rips={{
      top: {
        variant: select('Top Rip Variant', variants, variants[0], 'Top Rip'),
        color: select('Top Rip Color', COLORS, COLORS[0], 'Top Rip'),
      },
      bottom: {
        variant: select(
          'Bottom Rip Variant',
          variants,
          variants[0],
          'Bottom Rip'
        ),
        color: select('Bottom Rip Color', COLORS, COLORS[0], 'Bottom Rip'),
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
        color: select('Top Rip Color', COLORS, COLORS[0]),
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
        color: select('Bottom Rip Color', COLORS, COLORS[0]),
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
        color: select('Top Rip Color', COLORS, COLORS[0], 'Top Rip'),
      },
      bottom: {
        variant: select(
          'Bottom Rip Variant',
          variants,
          variants[0],
          'Bottom Rip'
        ),
        color: select('Bottom Rip Color', COLORS, COLORS[0], 'Bottom Rip'),
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
