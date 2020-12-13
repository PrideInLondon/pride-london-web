import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { ImageElement, ImageCaption, ImageContainer } from './Image'

const variants = {
  Column: 'column',
  Row: 'row',
} as const

const ImageWrapper = styled.div`
  display: flex;
  max-width: 400px;
`

storiesOf('Image', module).add('default', () => {
  return (
    <ImageWrapper>
      <ImageContainer
        variant={select('Variant', variants, variants.Column)}
        to="/"
      >
        <ImageElement
          image={{
            width: 200,
            height: 200,
            src: logo,
            srcSet: logo,
          }}
          alt="Pride in London logo"
        />
        <ImageCaption>Caption</ImageCaption>
      </ImageContainer>
    </ImageWrapper>
  )
})
