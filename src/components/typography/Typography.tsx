import styled from 'styled-components'
import {
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  ResponsiveValue,
  space,
  system,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system'
import { mediaQueries } from '../../theme/mediaQueries'
import { fontSizes } from '../../theme/fonts'
import { space as spacing } from '../../theme/space'

interface TextTransformProps {
  textTransform?: ResponsiveValue<
    'lowercase' | 'uppercase' | 'capitalize' | 'inherit' | 'initial' | 'none'
  >
}

type TypoProps = ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  TextTransformProps

const typoUtils = compose(
  color,
  flexbox,
  layout,
  space,
  typography,
  system({
    textTransform: true,
  })
)

const headingDefaultProps = {
  marginTop: '0',
  fontFamily: 'title',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '1.2',
  color: 'indigo',
}

export const H1 = styled.h1<TypoProps>`
  ${typoUtils}
`

H1.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h1_mobile', md: 'h1' },
  mb: { default: 'xl_mob', md: 'xl' },
}

export const H2 = styled.h2<TypoProps>`
  ${typoUtils}
`

H2.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h2_mobile', md: 'h2' },
  mb: { default: 'xl_mob', md: 'xl' },
}

export const H3 = styled.h3<TypoProps>`
  ${typoUtils}
`
H3.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h3_mobile', md: 'h3' },
  mb: 'md',
}

export const H4 = styled.h4<TypoProps>`
  ${typoUtils}
`

H4.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h4_mobile', md: 'h4' },
  mb: 'sm',
}

export const H5 = styled.h5<TypoProps>`
  ${typoUtils}
`

H5.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h5_mobile', md: 'h5' },
  mb: 'sm',
}

export const H6 = styled.h6<TypoProps>`
  ${typoUtils}
`

H6.defaultProps = {
  ...headingDefaultProps,
  fontSize: { default: 'h6_mobile', md: 'h6' },
  mb: 'sm',
}

export const Strong = styled.strong<TypoProps>`
  ${typoUtils}
`

Strong.defaultProps = {
  fontWeight: '700',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  color: 'inherit',
}

export const Em = styled.em<TypoProps>`
  ${typoUtils}
`

Em.defaultProps = {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  fontStyle: 'italic',
  color: 'inherit',
}

interface BodyProps extends TypoProps {
  variant?: ResponsiveValue<'sm' | 'md' | 'lg'>
}

export const P = styled.p<BodyProps>`
  ${variant({
    variants: {
      sm: {
        fontSize: fontSizes.body_sm_mobile,
        [mediaQueries.md]: {
          fontSize: fontSizes.body_sm,
          margin: `0 0 ${spacing.sm} 0`,
        },
      },
      md: {
        fontSize: fontSizes.body_md_mobile,
        [mediaQueries.md]: {
          fontSize: fontSizes.body_md,
          margin: `0 0 ${spacing.md} 0`,
        },
      },
      lg: {
        fontSize: fontSizes.body_lg,
        margin: `0 0 ${spacing.lg} 0`,
      },
    },
  })}
  && {
    ${typoUtils}
  }
`
P.defaultProps = {
  variant: 'md',
  color: 'indigo',
  style: {
    lineHeight: '1.2',
  },
}
