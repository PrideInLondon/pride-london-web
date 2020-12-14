import React from 'react'
import { storiesOf } from '@storybook/react'
import logo from '../../assets/logo.png'
import { Image } from './Image'

storiesOf('Image', module).add('default', () => (
  <Image
    image={{
      width: 200,
      height: 200,
      src: logo,
      srcSet: logo,
    }}
    alt="Pride in London logo"
    caption="Caption"
  />
))
