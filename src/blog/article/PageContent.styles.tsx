import styled from 'styled-components'
import { ShareBar } from '../../components/shareBar'
import { space } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const ContentWrapper = styled.div`
  ${mediaQueries.sm} {
    padding: 0 50px 0 50px;
  }

  ${mediaQueries.md} {
    padding: 0 100px 0 100px;
  }

  ${mediaQueries.lg} {
    padding: 0 250px 0 250px;
  }

  ${mediaQueries.xl} {
    padding: 0 350px 0 350px;
  }
`

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
  padding: 0 30px;

  ${mediaQueries.lg} {
    display: none;
  }
`
