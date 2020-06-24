import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Icon } from './Icon'
import { NAMES } from './icons'
import { ROTATIONS } from './Icon.utils'

storiesOf('Icon', module)
  .add('variant', () => {
    const name = select('Name', NAMES, NAMES[0])
    return (
      <div style={{ display: 'flex', fontSize: '2em' }}>
        <div
          style={{
            backgroundColor: colors.white,
            color: colors.indigo,
            padding: '1em',
          }}
        >
          <Icon name={name} variant="indigo" />
        </div>
        <div
          style={{
            backgroundColor: colors.indigo,
            color: colors.white,
            padding: '1em',
          }}
        >
          <Icon name={name} variant="white" />
        </div>
      </div>
    )
  })
  .add('rotate', () => (
    <div style={{ fontSize: '2em' }}>
      <Icon
        name={select('Name', NAMES, NAMES[0])}
        variant="indigo"
        rotate={select('Rotate', ROTATIONS, ROTATIONS[0])}
      />
    </div>
  ))
  .add('with text', () => {
    const name = select('Name', NAMES, NAMES[0])
    return (
      <div style={{ fontSize: '2em' }}>
        <p
          style={{
            color: colors.indigo,
          }}
        >
          <Icon name={name} variant="indigo" marginRight="0.25em" />
          Icon is vertically aligned with text by default
        </p>
      </div>
    )
  })
