import styled from 'styled-components'
import { layout } from 'styled-system'
import { sm } from '../../theme/space'
import { GalleryContainerBaseProps } from './GalleryContainer.types'

export const Grid = styled.div<GalleryContainerBaseProps>`
  display: flex;
  flex-wrap: wrap;

  > * {
    padding: ${sm}px;

    ${({ columns }) => layout({ width: columns })}
  }
`
