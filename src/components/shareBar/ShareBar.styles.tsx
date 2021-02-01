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
`

export const ShareText = styled(H6).attrs({ mb: 0 })`
  ${variant({
    variants: {
      vertical: {
        transform: 'rotate(90deg)',
      },
    },
  })}
`

export const SocialsWrapper = styled(Wrapper).attrs({
  display: 'flex',
})`
  ${variant({
    variants: {
      horizontal: {
        flexDirection: 'row',
        marginLeft: 'sm',
      },
      vertical: {
        flexDirection: 'column',
        transform: 'translateY(22px)',
        marginTop: 'sm',
      },
    },
  })}
`

export const StyledLink = styled.a`
  text-decoration: none;

  ${variant({
    variants: {
      horizontal: {
        marginX: sm / 4,
      },
      vertical: {
        marginY: sm / 4,
      },
    },
  })}
`
