import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const StyledTitle = styled.h2`
  font-weight: 700;
  color: ${props =>
    props.isLight ? theme.colors.lightGrey : theme.colors.darkBlue};
  margin: 0.25em;
  text-align: ${props => (props.isCentered ? 'center' : 'inherit')};
`
