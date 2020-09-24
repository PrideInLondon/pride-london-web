import React from 'react'
import { select, color, files } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import logo from '../../assets/logo.png'
import { RippedSection } from './RippedSection'
import { RipVariant } from './Rip.types'

const variants: RipVariant[] = [1, 2, 3, 4, 5]

export default {
  title: 'RippedSection',
}

export const TopAndBottomVariants = () => (
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
)

TopAndBottomVariants.story = {
  name: 'Top and Bottom variants',
}

export const TopVariant = () => (
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
)

TopVariant.story = {
  name: 'Top variant',
}

export const BottomVariant = () => (
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
)

BottomVariant.story = {
  name: 'Bottom variant',
}

export const WithBackgroundImage = () => (
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
)

WithBackgroundImage.story = {
  name: 'With background image',
}
