import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import logo from '../../assets/logo.png'
import { GalleryCard } from './GalleryCard'

const CardWrapper = styled.div`
  display: flex;
  max-width: 405px;
`

storiesOf('GalleryCard', module).add('default', () => (
  <CardWrapper>
    <GalleryCard
      name="Lorem Ipsum"
      year="20/09/1999"
      category="Category"
      title="Artwork Title"
      guidePrice="£12"
      altText="Pride in London logo"
      image={{
        src: logo,
        srcSet: logo,
        width: 200,
        height: 200,
      }}
    />
  </CardWrapper>
))
