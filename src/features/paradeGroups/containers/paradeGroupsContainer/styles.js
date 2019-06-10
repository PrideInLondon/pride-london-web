import styled from 'styled-components'
import theme from '../../../../theme/theme'

import { media } from '../../../../theme/media'

export const LetterContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  height: 50px;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  padding: 0 20px;

  ${media.tablet`
    padding: 0;
  `}
`

export const ScrolledLetters = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
`
