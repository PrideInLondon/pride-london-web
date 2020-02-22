import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import umbrellaJpg from '../../assets/umbrella.jpg'
import { Card, CardImage, CardContent, CardTitle, CardFooter } from './Card'

const variants = {
  Column: 'column',
  Row: 'row',
} as const

const CardWrapper = styled.div`
  display: flex;
  max-width: 400px;
`

storiesOf('Card', module).add('with image', () => {
  return (
    <CardWrapper>
      <Card variant={select('Variant', variants, variants.Column)} to="/">
        <CardImage
          image={{
            width: 200,
            height: 200,
            src: umbrellaJpg,
            srcSet: umbrellaJpg,
          }}
          alt="A rainbow umbrella"
        />
        <CardContent>
          <CardTitle>This is the title</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <CardFooter>This is the footer</CardFooter>
        </CardContent>
      </Card>
    </CardWrapper>
  )
})
