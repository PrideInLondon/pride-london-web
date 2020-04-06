import querystring from 'querystring'
import React, { useEffect, useState, useRef } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row } from '../../components/grid'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

if (
  process.env.NODE_ENV === 'development' &&
  !process.env.GATSBY_GOOGLE_MAPS_API_KEY
) {
  console.warn(
    '⚠️ You are missing the GATSBY_GOOGLE_MAPS_API_KEY environment variable'
  )
}

const StyledContainer = styled(Container)`
  padding: 0px 0px 30px;
  ${media.desktop`
    padding: 60px 0px;
  `};
`

const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0px 10px 15px 10px;
  color: ${theme.colors.indigo};
  ${media.desktop`
    margin: 0px 15px 30px 15px;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  `};
`
// allowing any props type as alt prop causing type errors
const MapLink: React.FC<any> = styled.a`
  display: block;
  height: 215px;
  background-size: cover;
  background-position: center center;
  margin: 0px;
  ${media.tablet`
    height: 350px;
    margin: 0px 50px;
  `};
  ${media.desktop`
    height: 450px;
    max-width: 830px;
    margin: 0px 90px;
  `};
`

const IndigoWrapper = styled.div`
  ${media.desktop`
    padding: 60px 0px;
    background-color: ${theme.colors.indigo};
  `};
`
interface EventDirectionsSectionProps {
  data: {
    location: {
      lat: number
      lon: number
    }
    locationName: string
    addressLine1?: string
    addressLine2?: string
    postcode?: string
    city?: string
  }
}

const EventDirectionsSection: React.FC<EventDirectionsSectionProps> = ({
  data,
}) => {
  const [width, setWidth] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const wrapperRef = useRef<HTMLAnchorElement>()
  const {
    location: { lat, lon },
    locationName,
    addressLine1,
    addressLine2,
    postcode,
    city,
  } = data

  const updateMapSize = (currentRef: HTMLAnchorElement | undefined): void => {
    if (currentRef) {
      const rect = currentRef.getBoundingClientRect()
      if (rect.width !== width || rect.height !== height) {
        setWidth(rect.width)
        setHeight(rect.height)
      }
    }
  }

  useEffect(() => {
    const { current } = wrapperRef
    updateMapSize(current)
    // eslint-disable-next-line
  }, [])

  return (
    <IndigoWrapper>
      <StyledContainer>
        <Row>
          <Heading>Getting to {locationName}</Heading>
        </Row>
        <MapLink
          alt="Get directions to the venue"
          ref={wrapperRef}
          href={`https://www.google.com/maps/search/?api=1&${querystring.encode(
            {
              query: [locationName, addressLine1, addressLine2, city, postcode]
                .filter(Boolean)
                .join(', '),
            }
          )}`}
          style={{
            backgroundImage:
              Boolean(width && height) &&
              `url(https://maps.googleapis.com/maps/api/staticmap?${querystring.encode(
                {
                  center: `${lat}${','}${lon}`,
                  zoom: 16,
                  size: `${width}x${height}`,
                  scale: 2,
                  maptype: 'roadmap',
                  markers: `color:red|label:${locationName}|${lat},${lon}`,
                  key: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
                }
              )})`,
          }}
        />
      </StyledContainer>
    </IndigoWrapper>
  )
}

export const query = graphql`
  fragment eventDirectionsFragment on ContentfulEvent {
    location {
      lat
      lon
    }
    locationName
    addressLine1
    addressLine2
    city
    postcode
  }
`
export default EventDirectionsSection
