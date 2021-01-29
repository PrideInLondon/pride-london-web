import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${compose(layout, space)}
`
