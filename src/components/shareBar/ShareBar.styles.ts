import styled from 'styled-components'
import { variant } from 'styled-system'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { sm } from '../../theme/space'

export const Wrapper = styled.div`
  font-size: 2em;
  display: flex;
  line-height: 1em;

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

export const ShareText = styled.h6`
  font-family: ${fonts.title};
  font-weight: 800;
  vertical-align: middle;
  color: ${colors.indigo};
`

export const StyledLink = styled.a`
  text-decoration: none;
  width: 1em;
`
