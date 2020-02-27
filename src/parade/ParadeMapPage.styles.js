import styled from 'styled-components'
import { Row } from '../components/grid'
import theme from '../theme/theme'
import { media } from '../theme/media'

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
  width: 100%;
`

export const SubTitle = styled.p`
  width: 100%;
  font-family: Roboto;
  margin-top: 18px;
  ${media.tablet`
    margin-top: 10px;
  `}
`

export const Map = styled.iframe`
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

export const DownloadPDFLinkMobile = styled.a`
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

export const DownloadAppLabel = styled.p`
  width: 100%;
  font-family: Roboto;
  color: ${theme.colors.darkGrey};
  font-size: 14px;
  line-height: 1.29;
  margin-top: 10px;
`

export const AppDownloadButtons = styled.div`
  margin-bottom: 30px;
  ${media.tablet`
    margin-bottom: 5px;
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
