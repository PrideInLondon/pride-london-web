import styled from 'styled-components'
import { ShareBar } from '../../components/shareBar'
import { Column } from '../../components/grid'
import { space } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const Content = styled(Column)`
  max-width: 830px;
  margin: 0 auto;
  margin-top: -140px;
  background-color: white;
  position: relative;
  padding: 30px;
`
export const ShareBarWrapper = styled.div`
  display: none;
  position: absolute;
  top: -${space.xxl};
  left: ${space.lg};
  height: 100%;
  z-index: 1;

  ${mediaQueries.lg} {
    display: block;
    left: ${space.lg};
  }

  ${mediaQueries.xl} {
    display: block;
    left: ${space.xxl};
  }
`
export const DesktopShareBar = styled(ShareBar)`
  top: 0;
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
