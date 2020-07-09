import styled from 'styled-components'
import { variant } from 'styled-system'
import { Container } from '../grid'
import { sm, lg } from '../../theme/space'
import { GalleryVariant } from './Gallery.types'

export const StyledContainer = styled(Container)<{ variant: GalleryVariant }>`
  ${variant({
    variants: {
      grid: {
        display: 'flex',
        gridGap: sm,
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
        gridAutoRows: lg,
      },
      masonry: {
        display: 'grid',
      },
    },
  })}
`
