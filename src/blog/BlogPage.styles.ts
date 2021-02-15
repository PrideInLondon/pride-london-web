import styled from 'styled-components'
import { GalleryContainer } from '../components/gallery'
import { md } from '../theme/space'

export const StyledGalleryContainer = styled(GalleryContainer)`
  > * {
    > *:not(:last-child) {
      margin-bottom: ${md * 2}px;
    }
  }
`
