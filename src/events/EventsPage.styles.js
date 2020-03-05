import styled from 'styled-components'
import { mediaQueries } from '../theme/mediaQueries'
import { Column } from '../components/grid'
import { colors } from '../theme/colors'
import mainBackground2880 from './mainBackground2880.jpg'
import mainBackground1600 from './mainBackground1600.jpg'
import mainBackground1024 from './mainBackground1024.jpg'
import mainBackground768 from './mainBackground768.jpg'

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
  background-size: 100% auto;
  background-image: url(${mainBackground768});

  ${mediaQueries.md} {
    background-image: url(${mainBackground1024});
  }

  ${mediaQueries.lg} {
    background-image: url(${mainBackground1600});
  }

  ${mediaQueries.retina2x} {
    background-image: url(${mainBackground1024});

    ${mediaQueries.md} {
      background-image: url(${mainBackground1600});
    }

    ${mediaQueries.lg} {
      background-image: url(${mainBackground2880});
    }
  }
`
