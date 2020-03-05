import styled from 'styled-components'
import { mediaQueries } from '../theme/mediaQueries'
import { Column } from '../components/grid'
import { colors } from '../theme/colors'

export const ColumnPagination = styled(Column)`
  text-align: center;
  padding-bottom: 20px;

  ${mediaQueries.md} {
    padding-top: 50px;
    padding-bottom: 60px;
  }
`

export const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${colors.white};
`

export const ListingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

export const Background = styled.div`
  background-color: ${colors.raisinBlack};
`
