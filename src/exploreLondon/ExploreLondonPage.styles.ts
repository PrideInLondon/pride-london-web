import styled from 'styled-components'
import { SpaceProps, compose, grid, space } from 'styled-system'
import { GalleryContainer } from '../components/gallery'
import { md } from '../theme/space'
import { colors } from '../theme/colors'

export const StyledGalleryContainer = styled(GalleryContainer)`
  > * {
    > *:not(:last-child) {
      margin-bottom: ${md * 2}px;
    }
  }
  ${compose(space, grid)}
`

export const ButtonWrapper = styled.div.attrs({ paddingY: 'xxl' })<SpaceProps>`
  text-align: center;
  background-color: ${colors.indigo};

  ${space}
`
