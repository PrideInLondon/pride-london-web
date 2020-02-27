import React, { Fragment } from 'react'
import { Row } from '../components/grid'
import iPhoneMockup from '../theme/assets/images/i-phone-mockup.png'
import googlePlayBadge from '../theme/assets/images/google-play.svg'
import appStoreBadge from '../theme/assets/images/apple.svg'
import {
  DownloadAppContentColumn,
  MockupColumn,
  MockupImg,
  DownloadAppContainer,
  AppDownloadButton,
  DownloadAppSectionTitle,
  DownloadAppSectionDescription,
  MockupImgBackground,
} from './DownloadAppBox.styles'

const DownloadAppBox = () => {
  const googlePlayUrl =
    'https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en_GB'
  const appStoreUrl =
    'https://itunes.apple.com/gb/app/pride-in-london/id1250496471?mt=8'
  return (
    <Fragment>
      <DownloadAppContainer>
        <Row px={[0, 15]}>
          <DownloadAppContentColumn
            width={[1, 1, 1, 0.55]}
            pl={[20, 20, 40, 80]}
            pr={20}
            pt={[20, 20, 40, 80]}
            pb={[40, 40, 60, 80]}
          >
            <DownloadAppSectionTitle>Download our app</DownloadAppSectionTitle>
            <DownloadAppSectionDescription>
              We all know there's hardly any signal in Central London during
              Pride, so make sure to download our iOS & Android app to carry our
              interactive Parade map, stage line up info and afterparty
              information around with you on the day
            </DownloadAppSectionDescription>
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
          </DownloadAppContentColumn>
          <MockupColumn
            style={{ position: 'relative' }}
            width={[1, 1, 1, 0.45]}
            px={0}
            py={0}
          >
            <MockupImgBackground>
              <MockupImg src={iPhoneMockup} />
            </MockupImgBackground>
          </MockupColumn>
        </Row>
      </DownloadAppContainer>
    </Fragment>
  )
}

export default DownloadAppBox
