import querystring from 'querystring'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import appStoreBadge from '../../../theme/assets/images/apple.svg'
import googlePlayBadge from '../../../theme/assets/images/google-play.svg'
import { Column, Row } from '../../../components/grid'
import theme from '../../../theme/theme'
import { media } from '../../../theme/media'
// import Button from '../../../components/button'

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
  display: inline-block;
  background-color: ${theme.colors.indigo};
  padding: 0 7px;
  font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  color: ${theme.colors.white};
  ${media.tablet`
    font-size: 46px;
  `}
  ${media.desktop`
    font-size: 56px;
  `}
`

const Subtitle = styled.p`
  margin-top: 18px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  color: ${theme.colors.indigo};
  ${media.tablet`
    font-size: 22px;
    margin-top: 10px;
  `}
  ${media.desktop`
    font-size: 24px;
  `}
`

const Map = styled.iframe`
  border: none;
  min-height: 400px;
  height: 100%;
  width: 100%;
  & > * {
    background-color: red !important;
  }
  ${media.tabletMax`
    height: 100vh !important;
  `}
`

// const DownloadPDFButton = styled(Button)`
//   ${media.tabletMax`
//     display: none;
//   `}
// `

// const DownloadPDFLinkMobile = styled.a`
//   font-family: Roboto;
//   font-size: 16px;
//   line-height: 1.38;
//   color: ${theme.colors.black};
//   text-decoration: none;
//   border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
//   transition: color 0.15s linear;
//   cursor: pointer;
//   margin-top: 30px;
//   &:hover,
//   &:focus {
//     color: ${theme.colors.eucalyptusGreen};
//   }
//   ${media.tablet`
//     display: none;
//   `}
// `

const BottomSection = styled.div`
  padding-bottom: 50px;
  margin-top: auto;
`

const DownloadAppLabel = styled.p`
  font-family: Roboto;
  color: ${theme.colors.darkGrey};
  font-size: 14px;
  line-height: 1.29;
`

const AppDownloadButtons = styled.div`
  margin-bottom: 30px;
  ${media.tablet`
    margin-bottom: 0;
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
            {/* <DownloadPDFButton link primary to="">
              Download map as a PDF
            </DownloadPDFButton> */}
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
                <img
                  alt="Pride in London on the App Store"
                  src={appStoreBadge}
                />
              </AppDownloadButton>
              <AppDownloadButton
                href="https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en"
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
            {/* <DownloadPDFLinkMobile href="">
              Download map as a PDF
            </DownloadPDFLinkMobile> */}
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
