import styled, { css } from 'styled-components'
import theme from '../theme/theme'
import { media } from '../theme/media'

export const StyledLetterLink = styled.a`
  color: ${props => (props.isDisabled ? 'grey' : 'initial')};
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  font-size: 16px;
  margin-right: 16px;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  ${props =>
    props.isActive &&
    css`
      border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
      font-weight: 600;
      color: ${theme.colors.indigo};
    `}

  ${props =>
    !props.isDisabled &&
    css`
      &:hover {
        border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
        font-weight: 600;
        color: ${theme.colors.indigo};
      }
    `}

  &:last-of-type {
    margin-right: 0;
  }

  ${media.tablet`
    font-size: 18px;
    margin-right: 8px;
  `}
`
