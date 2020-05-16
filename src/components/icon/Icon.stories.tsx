import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Icon } from './Icon'
import { COMPONENTS } from './Icon.utils'

const names: string[] = Object.keys(COMPONENTS)

const Wrapper = styled.div`
  display: flex;
`

const Column = styled.div`
  padding: 32px;
`

storiesOf('Icon', module).add('with variants', () => (
  <Wrapper>
    <Column style={{ backgroundColor: colors.white }}>
      <Icon name={select('Name', names, names[0])} variant="indigo" />
    </Column>
    <Column style={{ backgroundColor: colors.indigo }}>
      <Icon name={select('Name', names, names[0])} variant="white" />
    </Column>
  </Wrapper>
))
