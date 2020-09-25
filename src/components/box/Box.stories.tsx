import React from 'react'
import { Story, Meta } from '@storybook/react'

import { H3 } from '../typography'
import { Button } from '../button'
import { Box, BoxProps } from './index'

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    onButtonClick: { action: 'button clicked' },
  },
} as Meta

type StoryProps = {
  titleText: string
  buttonText: string
  onButtonClick: () => void
}

const Template: Story<BoxProps & StoryProps> = ({
  titleText,
  buttonText,
  onButtonClick,
  ...args
}) => (
  <Box {...args}>
    <H3
      fontFamily="cactus"
      textTransform="uppercase"
      mb={{ default: 'lg', md: '0' }}
    >
      {titleText}
    </H3>
    <Button ml="auto" onClick={onButtonClick}>
      {buttonText}
    </Button>
  </Box>
)

export const Default = Template.bind({})
Default.storyName = 'default'
Default.args = {
  display: { default: 'block', md: 'flex' },
  alignItems: 'center',
  justifyContent: 'spaceBetween',
  titleText: 'Donate to the community fund',
  buttonText: 'Donate now',
}
