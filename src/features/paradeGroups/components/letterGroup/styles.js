import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const Heading = styled.div`
  background-color: ${theme.colors.lightGrey};
  padding: 0 20px;
`

export const GroupsContainer = styled.div`
  margin-bottom: 40px;
  padding: 0 20px;
`

export const Wrapper = styled.div`
  /* Ensures heading still visible
  after clicking anchor link */
  &::before {
    display: block;
    content: ' ';
    margin-top: -50px;
    height: 50px;
    visibility: hidden;
    pointer-events: none;
  }
`
