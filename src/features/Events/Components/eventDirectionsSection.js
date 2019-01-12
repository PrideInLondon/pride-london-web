import querystring from 'querystring'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Row } from '../../../components/grid'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

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
  background-color: white;
  ${media.desktop`
    padding: 60px 0px;
    background-color: ${theme.colors.indigo};
  `};
`

const Heading = styled.h2`
  font-size: 1.125rem;
  font-weight: 300;
  margin: 0px 10px 15px 10px;
  color: ${props => props.theme.colors.indigo};
  ${media.desktop`
    margin: 0px 15px 30px 15px;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  `};
`

const MapLink = styled.a`
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

export default class EventDirectionsSection extends React.Component {
  state = { width: null, height: null }

  componentDidMount() {
    this.updateMapSize()
  }

  componentDidUpdate() {
    this.updateMapSize()
  }

  updateMapSize = () => {
    if (this.wrapperRef) {
      const rect = this.wrapperRef.getBoundingClientRect()
      if (
        rect.width !== this.state.width ||
        rect.height !== this.state.height
      ) {
        this.setState({
          width: rect.width,
          height: rect.height,
        })
      }
    }
  }

  render() {
    const {
      location: { lat, lon },
      locationName,
      addressLine1,
      addressLine2,
      postcode,
      city,
    } = this.props.data
    const { width, height } = this.state

    return (
      <StyledContainer>
        <Row>
          <Heading>Getting to {locationName}</Heading>
        </Row>
        <MapLink
          alt="Get directions to the venue"
          innerRef={ref => (this.wrapperRef = ref)}
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
    )
  }
}

EventDirectionsSection.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }),
    locationName: PropTypes.string.isRequired,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    postcode: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
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
