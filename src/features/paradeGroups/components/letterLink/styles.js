import styled from 'styled-components'
import theme from '../../../../theme/theme'

const StyledLetterLink = styled.a`
  color: ${props => (props.isDisabled ? 'grey' : 'initial')};
  font-size: 16px;
  padding: 4px;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  }
`

export default StyledLetterLink
