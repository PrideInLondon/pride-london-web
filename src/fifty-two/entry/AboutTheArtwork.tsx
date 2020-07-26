import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { H4, H6, P } from '../../components/typography'
import { Tag } from '../../components/tag'
import { Typeform } from '../../components/typeform'
import { Button } from '../../components/button'
import { renderMethods } from '../renderMethods'
import { xl_mob } from '../../theme/space'
import { CATEGORIES } from '../FiftyTwoPage'
import { AboutTheArtworkProps } from './AboutTheArtwork.types'

export const AboutTheArtwork: React.FC<AboutTheArtworkProps> = ({
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
  const { color } = CATEGORIES.find(({ name }) => category === name)!
  return (
    <>
      <H4>{title}</H4>
      <Tag color={color} marginBottom={`${xl_mob}px`}>
        {category}
      </Tag>
      <H6>Artist name</H6>
      <P marginBottom="lg">{name}</P>
      <H6>Year</H6>
      <P marginBottom="lg">{year}</P>
      <H6>Artwork information</H6>
      <P marginBottom="lg">{info}</P>
      <H6>Description</H6>
      {documentToReactComponents(json, renderMethods)}
      <H6 marginTop="lg">{sold ? 'Sold' : guidePrice}</H6>
      <Typeform id="eir1RrnE">
        <Button marginTop={`${xl_mob}px`}>Make an enquiry</Button>
      </Typeform>
    </>
  )
}
