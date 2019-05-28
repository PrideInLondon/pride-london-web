import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { media } from '../../../../theme/media'

export const RowContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGrey};
  display: flex;
  flex-direction: row;
  min-height: 80px;
  overflow: scroll;
  padding: 0 20px;

  ${media.tablet`
    padding: 0;
    `}
`

export const TitleContainer = styled.h3`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding-right: 2px;
  margin: 0;
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  text-align: right;
  justify-content: center;
  flex-basis: content;

  a,
  a:not([class]) {
    margin: 0 10px;
    border: 0;
  }
`
