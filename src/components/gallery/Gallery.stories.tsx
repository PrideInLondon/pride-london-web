import React from 'react'
import { storiesOf } from '@storybook/react'
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

storiesOf(Gallery.name, module)
  .add('default', () => (
    <Gallery
      entries={object('entries', ENTRIES.concat(ENTRIES).concat(ENTRIES))}
      render={({ entries }) => (
        <GalleryContainer
          variant={select(
            'variant',
            GALLERY_CONTAINER_VARIANTS,
            GALLERY_CONTAINER_VARIANTS[0]
          )}
          columns={{ default: 1, md: 2, lg: 3 }}
        >
          {entries.map(({ title, description, footer }) => (
            <Card key={title} to="#">
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
                <CardFooter>{footer}</CardFooter>
              </CardContent>
            </Card>
          ))}
        </GalleryContainer>
      )}
    />
  ))
  .add('paged', () => (
    <Gallery
      entries={object('entries', ENTRIES.concat(ENTRIES).concat(ENTRIES))}
      pageSize={number('pageSize', ENTRIES.length, {
        min: 1,
        max: ENTRIES.length * 3,
      })}
      render={({ entries, moreEntriesToShow, showNextPage }) => (
        <>
          <GalleryContainer
            variant={select(
              'variant',
              GALLERY_CONTAINER_VARIANTS,
              GALLERY_CONTAINER_VARIANTS[0]
            )}
            columns={{ default: 1, md: 2, lg: 3 }}
          >
            {entries.map(({ title, description, footer }) => (
              <Card key={title} to="#">
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <p>{description}</p>
                  <CardFooter>{footer}</CardFooter>
                </CardContent>
              </Card>
            ))}
          </GalleryContainer>
          {moreEntriesToShow && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              <Button variant="outline" onClick={showNextPage}>
                Show more
              </Button>
            </div>
          )}
        </>
      )}
    />
  ))
