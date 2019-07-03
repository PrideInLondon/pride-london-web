import styled from 'styled-components'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import { Container, Column } from '../../../../components/grid'

export const DownloadAppContainer = styled(Container)`
  position: relative;
  margin-bottom: 60px;
  ${media.desktop`
  margin-bottom: 80px;
    `}
`

export const DownloadAppContentColumn = styled(Column)`
  background-color: ${theme.colors.lightGrey};
  margin-top: 50px;
`

export const MockupColumn = styled(Column)`
  text-align: center;
  ${media.desktop`
        padding-top: 50px;
    `}
`

export const DownloadAppSectionTitle = styled.h1`
  margin-bottom: 10px;
`

export const DownloadAppSectionDescription = styled.p`
  margin-bottom: 30px;
  ${media.desktop`
        margin-bottom: 60px;
    `}
`

export const MockupImgBackground = styled.div`
  background-color: ${theme.colors.lightGrey};
  height: 100%;
`

export const AppDownloadButton = styled.a`
  &:first-of-type {
    margin-right: 14px;
  }
  img {
    height: 44px;
    width: 128px;
  }
  ${media.desktop`
    &:first-of-type {
        margin-right: 24px;
    }
    img {
        height: 60px;
        width: 175px;
    }
  `}
`

export const MockupImg = styled.img`
  position: unset;
  max-height: 360px;
  vertical-align: bottom;

  ${media.desktop`
        position: absolute;
        max-height: unset;
        height: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    `}
`
