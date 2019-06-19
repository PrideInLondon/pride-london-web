import styled from 'styled-components'
import theme from '../../../theme/theme'
import { media } from '../../../theme/media'
import { Row } from '../../../components/grid'
import Button from '../../../components/button'

export const ParadeMapContainer = styled(Row)`
  font-family: Poppins;
  min-height: calc(100vh - 80px);
  ${media.nav`
    min-height: calc(100vh - 100px);
  `};
`

export const ParadeMapContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  ${media.tablet`
    max-width: 380px;
  `}
`

export const Title = styled.h1`
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

export const Subtitle = styled.p`
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

export const Map = styled.iframe`
  border: none;
  min-height: 400px;
  height: 100%;
  width: 100%;
  & > * {
    background-color: red !important;
  }
`

export const DownloadPDFButton = styled(Button)`
  ${media.tabletMax`
    display: none;
  `}
`

export const DownloadPDFLinkMobile = styled.a`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.38;
  color: ${theme.colors.black};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  transition: color 0.15s linear;
  cursor: pointer;
  margin-top: 30px;
  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }
  ${media.tablet`
    display: none;
  `}
`

export const BottomSection = styled.div`
  padding-bottom: 50px;
  margin-top: auto;
`

export const DownloadAppLabel = styled.p`
  font-family: Roboto;
  color: ${theme.colors.darkGrey};
  font-size: 14px;
  line-height: 1.29;
`

export const AppDownloadButtons = styled.div`
  margin-bottom: 30px;
  ${media.tablet`
    margin-bottom: 0;
  `}
`

export const AppDownloadButton = styled.a`
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
