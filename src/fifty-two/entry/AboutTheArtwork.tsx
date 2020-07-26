import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { H4, H6, P } from '../../components/typography'
import { Typeform } from '../../components/typeform'
import { Button } from '../../components/button'
import { renderMethods } from '../renderMethods'
import { xl_mob } from '../../theme/space'
import { AboutTheArtworkProps } from './AboutTheArtwork.types'

export const AboutTheArtwork: React.FC<AboutTheArtworkProps> = ({
  artist: { name },
  artwork: {
    title,
    year,
    info,
    description: { json },
    sold,
    guidePrice,
  },
}) => (
  <>
    <H4>{title}</H4>
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
