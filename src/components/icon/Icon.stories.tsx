import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Icon } from './Icon'

const names = {
  Calendar: 'calendar',
  Laptop: 'laptop',
} as const

const Wrapper = styled.div`
  display: flex;
`

const Column = styled.div`
  padding: 32px;
`

storiesOf('Icon', module).add('with variants', () => (
  <Wrapper>
    <Column style={{ backgroundColor: colors.white }}>
      <Icon name={select('Name', names, names.Calendar)} variant="indigo" />
    </Column>
    <Column style={{ backgroundColor: colors.indigo }}>
      <Icon name={select('Name', names, names.Calendar)} variant="white" />
    </Column>
  </Wrapper>
))
