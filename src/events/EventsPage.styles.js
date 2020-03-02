import styled from 'styled-components'
import { color } from 'styled-system'
import { media } from '../theme/media'
import { Column } from '../components/grid'
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
  color: ${colors.white};
`

export const ListingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

export const PageWrapper = styled.div`
  ${color}
`
