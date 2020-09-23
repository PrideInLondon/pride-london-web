import React from 'react'
import styled from 'styled-components'
import { select } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { Card, CardImage, CardContent, CardTitle, CardFooter } from './Card'
import { CARD_VARIANTS } from './Card.types'

const CardWrapper = styled.div`
  display: flex;
  max-width: 400px;
`

export default {
  title: 'Card',
}

export const WithImage = () => {
  return (
    <CardWrapper>
      <Card variant={select('Variant', CARD_VARIANTS, CARD_VARIANTS[0])} to="/">
        <CardImage
          image={{
            width: 200,
            height: 200,
            src: logo,
            srcSet: logo,
          }}
          alt="Pride in London logo"
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
}

WithImage.story = {
  name: 'with image',
}
