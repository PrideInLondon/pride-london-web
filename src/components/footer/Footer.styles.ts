import styled from 'styled-components'
import { space } from 'styled-system'
import { colors } from '../../theme/colors'
import background from './background.jpg'

export const Wrapper = styled.footer.attrs({ padding: 'xl' })`
  display: flex;
  background-image: url(${background});
  background-size: cover;
  width: 100%;

  ${space}
`

export const Content = styled.div.attrs({ padding: 'xl' })`
  background-color: ${colors.white};
  width: 100%;

  ${space}
`
