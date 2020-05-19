import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { Column } from '../grid'

export const CTAWrapper = styled.div`
  ${media.desktopMax`
    background-color: ${theme.colors.white}; 
  `};
`

export const CTAPanel = styled.div`
  background-color: ${theme.colors.white};
  padding: 30px 0;
  color: ${theme.colors.indigo};
  ${media.desktop`
    position: absolute;
    width: 33.3333%;
    right: 0;
    top: -100px;
    padding: 40px;
    border: solid 2px ${theme.colors.indigo};
 `};
`

export const CTATitle = styled.h3`
  margin: 0 0 0.5em 0;
  color: ${theme.colors.indigo};
`

export const CTABody = styled.p`
  margin: 0 0 1.875rem;
  font-size: 0.875rem;
  line-height: 1.2857;
`

export const RelativeColumn = styled(Column)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`
