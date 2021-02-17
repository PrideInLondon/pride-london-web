import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { H4, H6, P } from '../../components/typography'
import { Tag } from '../../components/tag'
import { Typeform } from '../../components/typeform'
import { Button } from '../../components/button'
import { renderMethods } from '../../components/richText/renderMethods'
import { xl_mob } from '../../theme/space'
import { CATEGORIES } from '../FiftyTwoPage'
import { ContentfulFiftyTwoGalleryEntry } from './FiftyTwoEntryPage.types'

export const AboutTheArtwork: React.FC<ContentfulFiftyTwoGalleryEntry> = ({
  artist: { name },
  artwork: {
    title,
    category,
    year,
    info,
    description: { json },
    sold,
    guidePrice,
  },
}) => {
  const { color } = CATEGORIES.find(({ name: n }) => category === n)!
  return (
    <>
      <H4 as="h2" marginTop={{ default: 'lg', md: '0' }}>
        {title}
      </H4>
      <Tag color={color} marginBottom={{ default: 'lg', md: `${xl_mob}px` }}>
        {category}
      </Tag>
      <H6 as="h3">Artist name</H6>
      <P marginBottom="lg">{name}</P>
      <H6 as="h3">Year</H6>
      <P marginBottom="lg">{year}</P>
      <H6 as="h3">Artwork information</H6>
      <P marginBottom={{ default: 'lg', md: `${xl_mob}px` }}>{info}</P>
      <H6 as="h3">Description</H6>
      {documentToReactComponents(json, renderMethods)}
      <H6 as="h3" marginTop={{ default: 'lg', md: `${xl_mob}px` }}>
        {sold ? 'Sold' : guidePrice}
      </H6>
      <Typeform id="eir1RrnE">
        <Button marginTop={{ default: 'lg', md: `${xl_mob}px` }}>
          Make an enquiry
        </Button>
      </Typeform>
    </>
  )
}
