import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { media } from '../../../../theme/media'

const StyledLetterLink = styled.a`
  color: ${props => (props.isDisabled ? 'grey' : 'initial')};
  font-size: 16px;
  margin-right: 8px;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
    font-weight: 600;
    color: ${theme.colors.indigo};
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${media.tablet`
    font-size: 18px;
  `}
`

export default StyledLetterLink
