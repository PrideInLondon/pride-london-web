import React from 'react'
import { storiesOf } from '@storybook/react'
import { RichText } from './RichText'
import {
  paragraph,
  formatted,
  links,
  unorderedList,
  orderedList,
  quote,
  video,
  image,
} from './__mocks__'

storiesOf('RichText', module)
  .add('paragraph', () => <RichText document={paragraph} />)
  .add('formatted', () => <RichText document={formatted} />)
  .add('links', () => <RichText document={links} />)
  .add('unordered list', () => <RichText document={unorderedList} />)
  .add('ordered list', () => <RichText document={orderedList} />)
  .add('quote', () => <RichText document={quote} />)
  .add('video', () => <RichText document={video} />)
  .add('image', () => <RichText document={image} />)
