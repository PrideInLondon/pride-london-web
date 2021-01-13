import React from 'react'
import { storiesOf } from '@storybook/react'
import { files, text } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { Image } from './Image'

storiesOf('Image', module).add('default', () => (
  <Image
    src={files('src', '.jpg, .png', [logo], 'image')[0]}
    alt={text('alt', 'Pride in London logo')}
    caption={text('caption', 'Logo')}
  />
))
