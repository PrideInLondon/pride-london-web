import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;

  ${media.tablet`
    margin: 20px 0;
  `};

  ${media.tabletMax`
    margin-right: -10px;
  `};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  svg {
    margin-right: 10px;
  }
`

export const Title = styled.h3`
  margin: 0;
`
