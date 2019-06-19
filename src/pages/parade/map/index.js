import querystring from 'querystring'
import React, { Fragment } from 'react'
import { Column } from '../../../components/grid'
import googlePlayBadge from '../../../theme/assets/images/google-play.svg'
import appStoreBadge from '../../../theme/assets/images/apple.svg'
import {
  ParadeMapContainer,
  ParadeMapContent,
  Title,
  Subtitle,
  Map,
  BottomSection,
  AppDownloadButton,
  DownloadAppLabel,
  DownloadPDFButton,
  DownloadPDFLinkMobile,
  AppDownloadButtons,
} from './styles'

const ParadeMap = () => (
  <Fragment>
    <ParadeMapContainer mx={0}>
      <Column
        width={[1, 1, 0.5, 0.45, 0.4]}
        pt={[60, 60, 0]}
        pb={0}
        pl={[20, 20, 20, 30, 90]}
        pr={20}
      >
        <ParadeMapContent>
          <div style={{ marginTop: 'auto' }}>
            <Title>Parade map</Title>
            <Subtitle>
              Use it to find the best places to watch the parade and navigate to
              the different stages & areas.
            </Subtitle>
            <DownloadPDFButton link primary to="">
              Download map as a PDF
            </DownloadPDFButton>
          </div>
          <BottomSection>
            <DownloadAppLabel>
              Download our iOS & Android app to carry the map around with you,
              internet connection is poor on the day.
            </DownloadAppLabel>
            <AppDownloadButtons>
              <AppDownloadButton
                href="https://itunes.apple.com/gb/app/pride-in-london/id1250496471"
                aria-label="Download from App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStoreBadge} />
              </AppDownloadButton>
              <AppDownloadButton
                href="https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en"
                aria-label="Download from Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={googlePlayBadge} />
              </AppDownloadButton>
            </AppDownloadButtons>
            <DownloadPDFLinkMobile href="">
              Download map as a PDF
            </DownloadPDFLinkMobile>
          </BottomSection>
        </ParadeMapContent>
      </Column>
      <Column width={[1, 1, 0.5, 0.55, 0.6]} pt={[0]} px={0} pb={0}>
        <Map
          frameBorder="0"
          src={`https://www.google.com/maps/d/embed?${querystring.encode({
            mid: `1I5M9Oyc1damFcMhsi6yfODAMD6NXeIxi`,
            z: 16,
            ll: `51.51004, -0.13501`,
            hl: `en`,
            output: `embed`,
            t: 'm',
          })}`}
          allowFullScreen
        ></Map>
      </Column>
    </ParadeMapContainer>
  </Fragment>
)

export default ParadeMap
