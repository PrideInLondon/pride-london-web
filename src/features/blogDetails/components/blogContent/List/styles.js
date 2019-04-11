import styled from 'styled-components'
import { blogContent } from '../styles'

export const StyledList = styled.div`
  ${blogContent}
  & p {
    margin: 0;
    padding: 0;
  }
`
