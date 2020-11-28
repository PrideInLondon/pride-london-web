import React from 'react'
import { storiesOf } from '@storybook/react'
import theme from '../theme/theme'
import ParadeGroups from './ParadeGroups'

const paradeGroups = [
  {
    name: '23 group',
    id: '0',
    category: 'ARTS',
    websiteUrl: 'www.fun.com',
    twitterUrl: 'www.twit.com',
    emailUrl: 'emailUrl',
  },
  {
    name: 'A group',
    id: '1',
    category: 'ARTS',
    websiteUrl: 'www.fun.com',
    twitterUrl: 'www.twit.com',
    emailUrl: 'emailUrl',
  },
  {
    name: 'B group',
    id: '2',
    category: 'BUSINESS',
    websiteUrl: 'www.fun.com',
    twitterUrl: 'www.twit.com',
    emailUrl: 'emailUrl',
  },
]

const categories = [
  {
    title: 'All groups',
    api: 'MAGIC_VALUE_NOT_USED',
    hexColour: theme.colors.yellow,
  },
  {
    title: 'Arts',
    api: 'ARTS',
    hexColour: theme.colors.tomato,
  },
  {
    title: 'Business',
    api: 'BUSINESS',
    hexColour: theme.colors.pink,
  },
]

storiesOf('ParadeGroups', module).add('default', () => (
  <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
))
