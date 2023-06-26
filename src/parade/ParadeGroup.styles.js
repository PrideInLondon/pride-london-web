import styled from 'styled-components'
import theme from '../theme/theme'
import { media } from '../theme/media'

export const RowContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.lightGrey};
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 15px 20px;

  ${media.tablet`
    padding: 17px 0 23px 0;
  `}
`

export const CompanyContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
`

export const CompanyInfoContainer = styled.div`
  display: block;
`

export const TitleContainer = styled.h3`
  color: ${theme.colors.indigo};
  margin-top: 0;
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

export const CompanyDescription = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 80%;
`
