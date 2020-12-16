import React from 'react'
import { storiesOf } from '@storybook/react'
import { RichText } from './RichText'
import { paragraph, formatted, links, unorderedList } from './__mocks__'

storiesOf('RichText', module)
  .add('paragraph', () => <RichText document={paragraph} />)
  .add('formatted', () => <RichText document={formatted} />)
  .add('links', () => <RichText document={links} />)
  .add('unordered list', () => <RichText document={unorderedList} />)
