import querystring from 'querystring'
import React from 'react'
import appStoreBadge from '../assets/appStore.svg'
import googlePlayBadge from '../assets/googlePlayStore.svg'
import { Column } from '../components/grid'
import { Button } from '../components/button'
import {
  ParadeMapContainer,
  ParadeMapContent,
  Title,
  SubTitle,
  Map,
  DownloadPDFLinkMobile,
  DownloadAppLabel,
  AppDownloadButtons,
  AppDownloadButton,
} from './ParadeMapPage.styles'

const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en'
const appStoreUrl =
  'https://itunes.apple.com/gb/app/pride-in-london/id1250496471'
const mapPdfLink =
  'https://assets.ctfassets.net/0ho16wyr4i9n/73s6Ny4Ota2DFEt4AjbfQm/20ac5456111dbc0d177a7c0688bef835/Pride_in_London_Parade_Map_2019.pdf'

const ParadeMapPage = () => (
  <>
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
          <SubTitle>
            We've created an interactive map to help you find your way around on
            Parade day. Use it to find the best place to watch the Parade, find
            your way to our different stages/areas and find important amenities
            like water refill stations and toilets.
          </SubTitle>
          {mapPdfLink && (
            <Button
              to={mapPdfLink}
              marginBottom="30px"
              display={{ default: 'none', md: 'inline-block' }}
            >
              Download map as a PDF
            </Button>
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
              <img alt="Pride in London on the App Store" src={appStoreBadge} />
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
            <DownloadPDFLinkMobile
              href={mapPdfLink}
              rel="noopener noreferrer"
              target="_blank"
            >
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
            z: 15,
            ll: `51.51004, -0.14001`,
            hl: `en`,
            output: `embed`,
            t: 'm',
            style: 'feature:poi|visibility:off',
          })}`}
          allowFullScreen
        ></Map>
      </Column>
    </ParadeMapContainer>
  </>
)

export default ParadeMapPage
