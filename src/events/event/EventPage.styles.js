import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { Column } from '../../components/grid'

export const PageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: white;
`

export const Title = styled.h1`
  color: ${theme.colors.indigo};
  font-size: 1.75em;
  line-height: 1.4;
  margin-bottom: 20px;
  font-weight: 700;
`

export const SectionTitle = styled.h2`
  margin-top: 0;
`

export const HeroImageAndTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 240px;
  overflow: hidden;

  ${media.desktop`
    flex-direction: column;
    height: 480px;
  `};
`

export const TitleWrapper = styled.div`
  padding: 30px 0px;
  ${media.tablet`
    padding: 30px 0;
  `};
  ${media.desktop`
    padding: 60px 0px 50px;
  `};
  ${media.desktopHD`
    max-width: 830px;
  `};
`

export const Section = styled.div`
  margin-bottom: 20px;
  ${media.desktop`
    margin-bottom: 60px;
  `};
`

export const RelativeColumn = styled(Column)`
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`
export const EventInfoCardWrapper = styled.div`
  ${media.desktopMax`
    background-color: ${theme.colors.indigo}; 
  `};
`

export const AccessibilityHeading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 1.875rem 0 0.9375rem 0;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin: 1.875rem 0;
  `};
`
export const LineUpHeading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 1.875rem 0 0.9375rem 0;
  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin: 1.875rem 0;
  `};
`

export const HeroImage = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100% !important;
  width: 100% !important;
`
