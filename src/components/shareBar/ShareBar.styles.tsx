import styled from 'styled-components'
import { variant } from 'styled-system'
import { sm } from '../../theme/space'
import { H6 } from '../typography'
import { Wrapper } from '../wrapper'

export const Flex = styled(Wrapper).attrs({
  display: 'flex',
  alignItems: 'center',
  fontSize: '2em',
  lineHeight: '1em',
})`
  ${variant({
    variants: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  })}

  > * {
    ${variant({
      variants: {
        horizontal: {
          marginX: sm / 4,
          marginY: 0,
        },
        vertical: {
          marginX: 0,
          marginY: sm / 4,
        },
      },
    })}
  }
`

export const ShareText = styled(H6).attrs({ mb: 0 })`
  ${variant({
    variants: {
      vertical: {
        transform: 'rotate(90deg)',
        marginY: -10,
        marginX: -50,
      },
    },
  })}
`

export const StyledLink = styled.a`
  text-decoration: none;
  width: 1em;
`
