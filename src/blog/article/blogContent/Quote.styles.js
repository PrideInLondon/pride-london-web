import styled from 'styled-components'
import theme from '../../../theme/theme'
import { blogContent } from './BlogContent.styles'

export const StyledQuote = styled.div`
  ${blogContent}
`

export const BlockQuote = styled.blockquote`
  margin: 0;
  position: relative;
  padding-left: 30px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${theme.colors.greyBlue};
  &::after {
    content: '”';
    font-size: 4rem;
    position: absolute;
  }
  &::before {
    content: '“';
    font-size: 4rem;
    position: absolute;
    left: 0;
    top: -15px;
  }
  & > p {
    padding: 0;
    display: inline;
    font-size: 24px;
  }
`
