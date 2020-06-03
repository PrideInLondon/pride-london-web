import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { H3 } from '../typography'
import { Button } from '../button/Button'
import { Box } from './Box'

storiesOf('Box', module).add('default', () => (
  <Box
    display={{ default: 'block', md: 'flex' }}
    alignItems="center"
    justifyContent="spaceBetween"
  >
    <H3
      fontFamily="cactus"
      textTransform="uppercase"
      mb={{ default: 'lg', md: '0' }}
    >
      {text('Title', 'Donate to the community fund')}
    </H3>
    <Button ml="auto">{text('Button text', 'Donate now')}</Button>
  </Box>
))
