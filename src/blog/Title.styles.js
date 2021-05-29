import styled from 'styled-components'
import theme from '../theme/theme'
import { media } from '../theme/media'

export const StyledTitle = styled.h2`
  color: ${(props) =>
    props.isLight ? theme.colors.white : theme.colors.indigo};
  margin: 0 0 0.5em 0;

  ${media.tablet`
    text-align: center;
  `};
`
