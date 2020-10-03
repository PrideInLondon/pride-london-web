import React from 'react'
import { Story, Meta } from '@storybook/react'

import logo from '../../assets/logo.png'

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
  CardProps,
} from './index'

export default {
  title: 'Card',
  component: Card,
  subcomponents: { CardImage, CardContent, CardTitle, CardFooter },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

type StoryProps = {
  titleText: string
  contentText: string
  footerText: string
}

const Template: Story<CardProps & StoryProps> = ({
  titleText,
  contentText,
  footerText,
  ...args
}) => (
  <Card to="/" {...args}>
    <CardImage
      image={{
        width: 200,
        height: 200,
        src: logo,
        srcSet: logo,
      }}
      alt=""
    />
    <CardContent>
      <CardTitle>{titleText}</CardTitle>
      <p>{contentText}</p>
      <CardFooter>{footerText}</CardFooter>
    </CardContent>
  </Card>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'column',
  titleText: 'This is the title',
  contentText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  footerText: 'This is the footer',
}
