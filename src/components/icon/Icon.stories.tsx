import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Icon } from './Icon'
import { COMPONENTS } from './Icon.utils'

const names: string[] = Object.keys(COMPONENTS)

storiesOf('Icon', module)
  .add('variants', () => {
    const name: string = select('Name', names, names[0])
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
  .add('with text', () => {
    const name: string = select('Name', names, names[0])
    return (
      <div style={{ display: 'flex', fontSize: '2em' }}>
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
