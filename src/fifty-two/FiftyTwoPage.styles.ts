import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { PageIntro } from '../components/pageIntro'
import { colors } from '../theme/colors'
import { fontSizes } from '../theme/fonts'
import { mediaQueries } from '../theme/mediaQueries'

export const StyledPageIntro = styled(PageIntro)`
  p:first-of-type {
    font-size: ${fontSizes.body_md};

    ${mediaQueries.md} {
      font-size: ${fontSizes.body_lg};
    }
  }
`

export const ButtonWrapper = styled.div.attrs({ paddingY: 'xxl' })<SpaceProps>`
  text-align: center;
  background-color: ${colors.indigo};

  ${space}
`
