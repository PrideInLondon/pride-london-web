import styled from 'styled-components'
import { media } from '../theme/media'
import theme from '../theme/theme'

export const EventsPageFiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-left: -10px;
  padding: 0 20px;

  ${media.tablet`
    padding: 0;
    margin-left: 15px;
  `}
`

export const EventsPageFilterLabel = styled.span`
  color: ${theme.colors.black};
  display: block;
  width: 100%;
  font-family: ${theme.fonts.title};
  font-size: 16px;
  margin: 15px 0;
  font-weight: 600;
`
