import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const LetterContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  height: 50px;
  justify-content: space-between;
  overflow-x: scroll;
  margin-bottom: 20px;
  position: sticky;
  top: 0;

  padding: 0px 20px;
`

export const ScrollingContainer = styled.div`
  overflow: scroll;
  height: 500px;
`
