import styled from 'styled-components'
import { variant } from 'styled-system'
import { darken } from 'polished'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { ButtonAsAnchorProps, ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonAsAnchorProps | ButtonProps>`
  padding: 12px 35px;
  border-radius: 4px;
  font-family: ${theme.fonts.title};
  font-weight: 700;
  line-height: 1.388;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.15s linear;
  ${variant({
    variants: {
      primary: {
        border: 'none',
        backgroundColor: theme.colors.eucalyptusGreen,
        '&:hover,&:focus': {
          backgroundColor: darken(0.1, theme.colors.eucalyptusGreen),
        },
      },
      secondary: {
        border: 'none',
        backgroundColor: theme.colors.indigo,
        '&:hover,&:focus': {
          backgroundColor: darken(0.1, theme.colors.indigo),
        },
      },
    },
  })}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

// export const OldStyledButton = styled.button`
//   border: ${props =>
//     props.primary ? 'none' : `2px solid ${theme.colors.white}`};
//   color: ${props => (props.primary ? theme.colors.indigo : theme.colors.white)};
//   background-color: ${props =>
//     props.white
//       ? theme.colors.white
//       : props.primary
//       ? theme.colors.eucalyptusGreen
//       : theme.colors.indigo};
//   font-size: ${props => (props.small ? '0.875rem' : '1.125rem')};
//   min-width: ${props => {
//     return props.wide ? (!props.flexwidth ? '250px' : 'unset') : '180px'
//   }};
//   width: ${props => (props.fullmobile ? '100%' : 'auto')};

//   &:hover {
//     background-color: ${props =>
//       props.white
//         ? darken(0.1, theme.colors.white)
//         : props.primary
//         ? darken(0.1, theme.colors.eucalyptusGreen)
//         : darken(0.1, theme.colors.indigo)};
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   ${media.tablet`
//       width: auto;
//   `};
// `
