import styled from 'styled-components'
import { color } from 'styled-system'
import { media } from '../theme/media'
import { Column, Container } from '../components/grid'
import { colors } from '../theme/colors'

export const ColumnPagination = styled(Column)`
  text-align: center;
  padding-bottom: 20px;

  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 60px;
  `};
`

export const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${colors.indigo};
`

export const ListingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

export const PageWrapper = styled.div`
  ${color}
`
export const ExplainerContainer = styled(Column)`
  background-color: ${colors.white};
  position: fixed;
  padding-top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: left 0.15s linear, visibility 0s 0.15s linear;
  visibility: hidden;
  top: 0;
  left: 100%;
  z-index: 2;

  &.open {
    transition: left 0.15s linear, visibility 0s 0s linear;
    left: 0;
    visibility: visible;
  }

  ${media.tablet`
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    padding-top: 20px;
    visibility: visible;
  `};
`

export const InsetContainer = styled(Container)`
  ${media.tablet`
    margin-top: -50px;
    position: relative;
    z-index: 1;
  `};
`

export const BackgroundContainer = styled(PageWrapper)`
  background-color: ${colors.bondiBlue};
`
