import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    to: {
      description:
        'By default the Button component will render an html `<button />`. The resulting rendered component depends on this `to` prop.',
    },
  },
} as Meta

type StoryProps = {
  text: string
}

const Template: Story<ButtonProps & StoryProps> = ({ text, ...args }) => (
  <Button {...args}>{text}</Button>
)

export const Default = Template.bind({})
Default.args = {
  text: 'This is a button',
}

export const AsRelativeLink = Template.bind({})
AsRelativeLink.args = {
  text: 'This is a relative link',
  to: '/events',
}

export const AsExternalLink = Template.bind({})
AsExternalLink.args = {
  text: 'This is an external link',
  to: 'https://prideinlondon.org',
}

export const AsContactLink = Template.bind({})
AsContactLink.args = {
  text: 'This is a contact link',
  to: 'mailto:test@test.com',
}

export const WithLayoutProps = Template.bind({})
WithLayoutProps.args = {
  width: '500px',
  maxWidth: 'none',
  minWidth: 'auto',
  marginTop: '50px',
  marginRight: 'auto',
  marginBottom: '50px',
  marginLeft: '0',
  text: 'This is a button with styled-system overrides',
}

export const WithResponsiveLayoutProps = Template.bind({})
WithResponsiveLayoutProps.args = {
  width: {
    default: '100%',
    sm: '75%',
    md: '50%',
    lg: '25%',
    xl: 'auto',
  },
  margin: {
    default: '10px',
    sm: '20px',
    md: '30px',
    lg: '40px',
    xl: '50px',
  },
  text: 'This is a button with responsive styled-system overrides',
}
