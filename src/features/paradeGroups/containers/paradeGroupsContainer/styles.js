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
  padding: 10px 20px;
  border-bottom: 1px solid ${theme.colors.mediumGrey};

  ${media.tablet`
    padding: 10px 0px;
  `}
`

export const ScrolledLetters = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
`
