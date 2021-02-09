import styled from 'styled-components'
import { ShareBar } from '../../components/shareBar'
import { lg, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const ShareBarWrapper = styled.div`
  display: none;
  position: absolute;
  top: -${xxl}px;
  left: ${lg}px;
  margin-top: 48px;
  margin-left: -55px;
  height: 100%;
  z-index: 1;

  ${mediaQueries.lg} {
    display: block;
    left: ${xxl}px;
  }
`

export const DesktopShareBar = styled(ShareBar)`
  top: ${lg}px;
  margin-top: ${lg}px;
  margin-bottom: 120px;
  position: sticky;
`

export const MobileShareBar = styled(ShareBar)`
  display: block;
  margin-top: 20px;

  ${mediaQueries.lg} {
    display: none;
  }
`
