import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 60px;
`
export const NoteToEditor = styled.div`
  label {
    color: ${theme.colors.darkGrey};
  }
  input {
    color: ${theme.colors.darkGrey};
  }
`
