import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;

  img {
    display: block;
    width: 100%;
  }

  figcaption {
    text-align: right;
    font-size: 0.875rem;
    line-height: 1.2857;
    margin-top: 5px;
    color: ${theme.colors.darkGrey};
  }
`
