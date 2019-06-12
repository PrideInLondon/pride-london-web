import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const ParadeGroupsFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0 20px;

  ${media.tablet`
    padding: 0;
  `}
`
