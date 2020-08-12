import styled from 'styled-components'
import { ShareBar } from '../../components/shareBar'
import { space } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const ShareBarWrapper = styled.div`
  display: none;
  position: absolute;
  top: -${space.xxl};
  left: ${space.lg};
  margin-top: 100px;
  margin-left: -55px;
  height: 100%;
  z-index: 1;

  ${mediaQueries.lg} {
    display: block;
    left: 60px;
  }

  ${mediaQueries.xl} {
    display: block;
    left: ${space.xxl};
  }
`
export const DesktopShareBar = styled(ShareBar)`
  top: 100px;
  margin-top: 45px;
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
