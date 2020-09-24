import React from 'react'
import { object, select, number } from '@storybook/addon-knobs'
import { Card, CardContent, CardTitle, CardFooter } from '../card'
import { Button } from '../button'
import { Gallery } from './Gallery'
import { GalleryContainer } from './GalleryContainer'
import { GALLERY_CONTAINER_VARIANTS } from './GalleryContainer.types'

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

const MORE_ENTRIES = ENTRIES.concat(ENTRIES).concat(ENTRIES)

export default {
  title: 'Gallery',
}

export const Default = () => (
  <Gallery
    entries={object('entries', MORE_ENTRIES)}
    render={({ entries }) => (
      <GalleryContainer
        variant={select(
          'variant',
          GALLERY_CONTAINER_VARIANTS,
          GALLERY_CONTAINER_VARIANTS[0]
        )}
        columns={{ default: 1, md: 2, lg: 3 }}
      >
        {entries.map(({ title, description, footer }, index) => (
          <Card key={title} to="#">
            <CardContent>
              <CardTitle>
                Card #{index + 1}: {title}
              </CardTitle>
              <p>{description}</p>
              <CardFooter>{footer}</CardFooter>
            </CardContent>
          </Card>
        ))}
      </GalleryContainer>
    )}
  />
)

Default.storyName = 'default'

export const Paged = () => (
  <Gallery
    entries={object('entries', MORE_ENTRIES)}
    pageSize={number('pageSize', MORE_ENTRIES.length / 3, {
      min: 1,
      max: MORE_ENTRIES.length,
    })}
    render={({ entries, showNextPage }) => (
      <>
        <GalleryContainer
          variant={select(
            'variant',
            GALLERY_CONTAINER_VARIANTS,
            GALLERY_CONTAINER_VARIANTS[0]
          )}
          columns={{ default: 1, md: 2, lg: 3 }}
        >
          {entries.map(({ title, description, footer }, index) => (
            <Card key={title} to="#">
              <CardContent>
                <CardTitle>
                  Card #{index + 1}: {title}
                </CardTitle>
                <p>{description}</p>
                <CardFooter>{footer}</CardFooter>
              </CardContent>
            </Card>
          ))}
        </GalleryContainer>
        <div
          style={{
            textAlign: 'center',
            marginTop: '8px',
          }}
        >
          <p>
            You're viewing {entries.length} of {MORE_ENTRIES.length} entries
          </p>
          {entries.length < MORE_ENTRIES.length && (
            <Button variant="outline" onClick={showNextPage}>
              Show more
            </Button>
          )}
        </div>
      </>
    )}
  />
)

Paged.storyName = 'paged'
