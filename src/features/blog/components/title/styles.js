import styled from 'styled-components'

export const StyledTitle = styled.h2`
  font-weight: 700;
  color: ${props =>
    props.isLight ? props.theme.colors.lightGrey : props.theme.colors.darkBlue};
  margin: 0.25em;
`