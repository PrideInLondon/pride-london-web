import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { Card, CardImage, CardContent, CardTitle, CardFooter } from './Card'
import umbrellaJpg from './umbrella.jpg'

const CardWrapper = styled.div`
  display: flex;
  max-width: 400px;
`

storiesOf('Card', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'with image',
    () => {
      return (
        <CardWrapper>
          <Card>
            <CardImage
              image={{
                width: 200,
                height: 200,
                src: umbrellaJpg,
                srcSet: umbrellaJpg,
              }}
            />
            <CardContent>
              <CardTitle>This is the title</CardTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <CardFooter>This is the footer</CardFooter>
            </CardContent>
          </Card>
        </CardWrapper>
      )
    },
    {
      info: { inline: true },
    }
  )
