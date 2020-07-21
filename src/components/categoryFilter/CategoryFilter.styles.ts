import styled from 'styled-components'
import { hideVisually } from 'polished'
import { Tag } from '../tag'
import { space } from '../../theme/space'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: ${space.md};
  }
`

export const StyledTag = styled(Tag)`
  cursor: pointer;
`

export const Input = styled.input.attrs(({ type }) => ({
  type,
}))`
  ${hideVisually()};
`
