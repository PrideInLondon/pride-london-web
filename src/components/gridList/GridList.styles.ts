import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { space } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fonts } from '../../theme/fonts'

const HEIGHT = 280

export const Title = styled.div`
  color: ${colors.indigo};
  font-family: ${fonts.cactus};
  font-size: 2.4375rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;

  ${mediaQueries.md} {
    font-size: 3.5625rem;
  }
`
export const Count = styled.div`
  &:before {
    counter-increment: item;
    content: counter(item, decimal-leading-zero);
    display: block;
    width: 100%;
    font-size: 8.75rem;
    color: ${colors.mediumGrey};
    font-family: ${fonts.cactus};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: -${space.lg};

    ${mediaQueries.md} {
      margin-bottom: calc(-${space.md} * 2);
    }
  }
`

export const StyledGridItem = styled.li`
  padding: ${space.md};
  width: 100%;

  ${mediaQueries.md} {
    width: 50%;
  }
  ${mediaQueries.lg} {
    width: 33.3333%;
    float: left;
    height: ${HEIGHT}px;

    &:first-child {
      width: 66.6666%;
      height: ${HEIGHT * 2}px;
    }
  }
`

export const GridItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid ${colors.mediumGrey};
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  padding: ${space.lg};
  text-decoration: none;

  ${mediaQueries.md} {
    padding: ${space.md};
  }
  ${mediaQueries.lg} {
    padding: calc(${space.md} * 2);
  }
`

export const GridList = styled.ol`
  list-style: none;
  padding: 0;
  margin: -${space.md};
  display: flex;
  flex-wrap: wrap;
  counter-reset: item;

  ${mediaQueries.lg} {
    display: block;
    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }
`
