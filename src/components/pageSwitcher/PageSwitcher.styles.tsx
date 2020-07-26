import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  space,
  compose,
  flexbox,
  layout,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
import { colors } from '../../theme/colors'
import { space as spacing } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const PageLink = styled(({ children, to, className }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
))<FlexboxProps>`
  text-decoration: none;
  display: flex;
  ${flexbox}
`
export const PageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  justify-content: center;
  align-items: center;

  ${mediaQueries.md} {
    display: flex;
  }
`
export const PageItem = styled.li<SpaceProps & FlexboxProps & LayoutProps>`
  ${compose(space, flexbox, layout)}
`
export const PageNav = styled.nav`
  background-color: ${colors.indigo};
  padding: ${spacing.xl_mob};

  ${mediaQueries.lg} {
    padding: ${spacing.xl_mob} ${spacing.xxl};
  }
`
