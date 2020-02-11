import { rgba } from 'polished'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

export const List = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  background-color: ${theme.colors.white};

  ${media.tablet`
    box-shadow: 0 2px 4px 0 ${rgba(theme.colors.black, 0.2)};
  `};
`

export const ListItem = styled.li`
  padding: 8px 10px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    transition: background-color 0.15s linear;
    border-radius: 4px;
    
    &:hover {
      background-color: ${theme.colors.lightGrey};
    }
  `};
`
