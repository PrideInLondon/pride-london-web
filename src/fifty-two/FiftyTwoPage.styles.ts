import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { PageIntro } from '../components/pageIntro'
import { GalleryContainer } from '../components/gallery'
import { colors } from '../theme/colors'
import { fontSizes } from '../theme/fonts'
import { mediaQueries } from '../theme/mediaQueries'
import { md } from '../theme/space'

export const StyledPageIntro = styled(PageIntro)`
  p:first-of-type {
    font-size: ${fontSizes.body_md};

    ${mediaQueries.md} {
      font-size: ${fontSizes.body_lg};
    }
  }
`

export const StyledGalleryContainer = styled(GalleryContainer)`
  > * {
    > *:not(:last-child) {
      margin-bottom: ${md * 2}px;
    }
  }
`

export const ButtonWrapper = styled.div.attrs({ paddingY: 'xxl' })<SpaceProps>`
  text-align: center;
  background-color: ${colors.indigo};

  ${space}
`
