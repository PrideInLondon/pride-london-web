import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, number } from '@storybook/addon-knobs'
import { FlexColumn } from '../grid'
import { Card, CardContent, CardTitle, CardFooter } from '../card'
import { Button } from '../button'
import { Gallery } from './Gallery'

const ENTRIES = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    footer: 'Ut enim ad minim veniam',
  },
  {
    title: 'Duis aute irure dolor in',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    footer: 'Excepteur sint occaecat cupidatat non',
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    footer: 'Nemo enim ipsam voluptatem quia',
  },
]

storiesOf(Gallery.name, module)
  .add('default', () => (
    <Gallery
      entries={object('entries', ENTRIES)}
      render={({ entries }) =>
        entries.map(({ title, description, footer }) => (
          <FlexColumn key={title} width={{ default: 1, md: 1 / 2, lg: 1 / 3 }}>
            <Card to="#">
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
                <CardFooter>{footer}</CardFooter>
              </CardContent>
            </Card>
          </FlexColumn>
        ))
      }
    />
  ))
  .add('paged', () => (
    <Gallery
      entries={object('entries', ENTRIES.concat(ENTRIES))}
      paged={{
        pageSize: number('pageSize', 4, { min: 1, max: ENTRIES.length * 2 }),
        ShowMoreButton: <Button variant="outline">Show more</Button>,
      }}
      render={({ entries }) =>
        entries.map(({ title, description, footer }) => (
          <FlexColumn key={title} width={{ default: 1, md: 1 / 2, lg: 1 / 3 }}>
            <Card to="#">
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
                <CardFooter>{footer}</CardFooter>
              </CardContent>
            </Card>
          </FlexColumn>
        ))
      }
    />
  ))
