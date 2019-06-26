import querystring from 'querystring'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import appStoreBadge from '../../../theme/assets/images/apple.svg'
import googlePlayBadge from '../../../theme/assets/images/google-play.svg'
import { Column, Row } from '../../../components/grid'
import theme from '../../../theme/theme'
import { media } from '../../../theme/media'
import Button from '../../../components/button'

const ParadeMapContainer = styled(Row)`
  font-family: Poppins;
  min-height: calc(100vh - 80px);
  ${media.nav`
    min-height: calc(100vh - 100px);
  `};
`

const ParadeMapContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  ${media.tablet`
    max-width: 380px;
  `}
`

const Title = styled.h1`
  width: 100%;
`

const Subtitle = styled.p`
  width: 100%;
  font-family: Roboto;
  margin-top: 18px;
  ${media.tablet`
    margin-top: 10px;
  `}
`

const Map = styled.iframe`
  border: none;
  min-height: 400px;
  height: calc(100vh - 80px);
  width: 100%;
  & > * {
    background-color: red !important;
  }
  ${media.tabletMax`
    height: 100vh !important;
  `}
  ${media.nav`
    height: calc(100vh - 100px);
  `};
`

const DownloadPDFButton = styled(Button)`
  margin: 30px 0;
  ${media.tabletMax`
    display: none;
  `}
`

const DownloadPDFLinkMobile = styled.a`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.38;
  color: ${theme.colors.black};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  transition: color 0.15s linear;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }
  ${media.tablet`
    display: none;
  `}
`

const DownloadAppLabel = styled.p`
  width: 100%;
  font-family: Roboto;
  color: ${theme.colors.darkGrey};
  font-size: 14px;
  line-height: 1.29;
  margin-top: 10px;
`

const AppDownloadButtons = styled.div`
  margin-bottom: 30px;
  ${media.tablet`
    margin-bottom: 5px;
  `}
`

const AppDownloadButton = styled.a`
  margin-right: 18px;
  &:last-of-type {
    margin-right: 0;
  }
  img {
    height: 44px;
    width: 128px;
  }
  ${media.tablet`
    img {
        height: 50px;
        width: 146px;
    }
  `}
`

const ParadeMap = () => {
  const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en'
  const appStoreUrl =
    'https://itunes.apple.com/gb/app/pride-in-london/id1250496471'
  const mapPdfLink = null

  return (
    <Fragment>
      <ParadeMapContainer mx={0}>
        <Column
          width={[1, 1, 0.5, 0.45, 0.4]}
          pt={[40, 40, 0]}
          pb={0}
          pl={[20, 20, 20, 30, 90]}
          pr={20}
        >
          <ParadeMapContent>
            <Title>Parade map</Title>
            <Subtitle>
              We've created an interactive map to help you find your way around
              on Parade day. Use it to find the best place to watch the Parade,
              find your way to our different stages/areas and find important
              amenities like water refill stations and toilets.
            </Subtitle>
            {mapPdfLink && (
              <DownloadPDFButton link primary to={mapPdfLink}>
                Download map as a PDF
              </DownloadPDFButton>
            )}
            <DownloadAppLabel>
              There's always poor internet connection on the day, so it's a good
              idea to download our app to carry the map with you offline.
            </DownloadAppLabel>
            <AppDownloadButtons>
              <AppDownloadButton
                href={appStoreUrl}
                aria-label="Download from App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Pride in London on the App Store"
                  src={appStoreBadge}
                />
              </AppDownloadButton>
              <AppDownloadButton
                href={googlePlayUrl}
                aria-label="Download from Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Pride in London in the Google Play"
                  src={googlePlayBadge}
                />
              </AppDownloadButton>
            </AppDownloadButtons>
            {mapPdfLink && (
              <DownloadPDFLinkMobile href={mapPdfLink}>
                Download map as a PDF
              </DownloadPDFLinkMobile>
            )}
          </ParadeMapContent>
        </Column>
        <Column width={[1, 1, 0.5, 0.55, 0.6]} pt={[0]} px={0} pb={0}>
          <Map
            frameBorder="0"
            src={`https://www.google.com/maps/d/embed?${querystring.encode({
              mid: process.env.GATSBY_PARADE_MAP_ID,
              z: 16,
              ll: `51.51004, -0.13501`,
              hl: `en`,
              output: `embed`,
              t: 'm',
              style: 'feature:poi|visibility:off',
            })}`}
            allowFullScreen
          ></Map>
        </Column>
      </ParadeMapContainer>
    </Fragment>
  )
}
export default ParadeMap
