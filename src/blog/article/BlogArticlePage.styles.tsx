import React from 'react'
import styled from 'styled-components'
import { H2, H4 } from '../../components/typography'
import { RichText } from '../../components/richText'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'
import { spacing, lg } from '../../theme/space'

export const MAX_CONTENT_WIDTH = 624

const CONTENT_PADDING_X = {
  default: 'lg',
  md: 'xxl',
} as const

export const Title: React.FC<{}> = ({ children }) => {
  const props = { as: 'h1', textAlign: 'center' } as const
  return (
    <>
      <H2 maxWidth={842} display={{ default: 'none', md: 'block' }} {...props}>
        {children}
      </H2>
      <H4 display={{ default: 'block', md: 'none' }} mb="xl_mob" {...props}>
        {children}
      </H4>
    </>
  )
}

export const Content = styled(RichText).attrs({ paddingX: CONTENT_PADDING_X })`
  > p:first-of-type {
    font-size: ${fontSizes.body_md};

    ${mediaQueries.md} {
      font-size: ${fontSizes.body_lg};
    }
  }

  /* RippedSection full-width image :( */
  > section {
    margin-left: -${spacing[CONTENT_PADDING_X.default]};
    margin-right: -${spacing[CONTENT_PADDING_X.default]};

    ${mediaQueries.md} {
      margin-left: -${spacing[CONTENT_PADDING_X.md]};
      margin-right: -${spacing[CONTENT_PADDING_X.md]};
    }
  }

  ${mediaQueries.md} {
    ol,
    p,
    ul {
      max-width: ${MAX_CONTENT_WIDTH}px;
    }
  }
`

export const YouMayAlsoLikeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  row-gap: ${lg}px;

  ${mediaQueries.lg} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
  }
`
