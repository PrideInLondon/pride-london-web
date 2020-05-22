import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { variant, space, layout, compose } from 'styled-system'
import { darken, lighten } from 'polished'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'
import { useSpaceLayoutProps } from '../../hooks/useSpaceLayoutProps'
import { ButtonAsAnchorProps, ButtonProps } from './YmuwButton.types'

type StyledButtonProps =
  | (ButtonAsAnchorProps & { renderAs: 'a' | typeof Link })
  | (ButtonProps & { renderAs: 'button' })

export const StyledButton = styled(
  ({ renderAs, to, ...props }: StyledButtonProps) => {
    const spaceLayoutProps = useSpaceLayoutProps(props)
    if (renderAs === 'a') {
      // disable eslint rule as children passed as props will automatically render content
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...spaceLayoutProps[1]} />
    }
    if (renderAs === Link) {
      return <Link to={to!} {...spaceLayoutProps[1]} />
    }
    return <button {...spaceLayoutProps[1]} />
  }
)`
  ${mediaQueries.sm} {
    display: inline-block;
    padding: 12px 35px;
    font-family: ${fonts.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.388;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.15s linear, border 0.15s linear;
  }
  ${mediaQueries.md} {
    padding: 12px 35px;
    margin: auto 0 auto auto;
    font-family: ${fonts.body};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.388;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.15s linear, border 0.15s linear;
  }
  ${mediaQueries.lg} {
    padding: 12px 35px;
    margin: auto 0 auto auto;
    font-family: ${fonts.body};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.388;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.15s linear, border 0.15s linear;
  }

  ${variant({
    variants: {
      primary: {
        border: `2px solid ${colors.eucalyptusGreen}`,
        backgroundColor: colors.eucalyptusGreen,
        color: colors.indigo,
        '&:hover,&:focus': {
          backgroundColor: lighten(0.1, colors.eucalyptusGreen),
          borderColor: lighten(0.1, colors.eucalyptusGreen),
        },
      },
      secondary: {
        border: `2px solid ${colors.indigo}`,
        backgroundColor: colors.indigo,
        color: colors.white,
        '&:hover,&:focus': {
          backgroundColor: darken(0.1, colors.indigo),
          borderColor: darken(0.1, colors.indigo),
        },
      },
      outline: {
        border: `2px solid currentColor`,
        backgroundColor: 'transparent',
        color: colors.indigo,
        transition: 'box-shadow 0.15s linear',
        '&:hover,&:focus': {
          boxShadow: `inset 0px 0px 0px 2px currentColor`,
        },
      },
      'outline-white': {
        border: `2px solid currentColor`,
        backgroundColor: 'transparent',
        color: colors.white,
        transition: 'box-shadow 0.15s linear',
        '&:hover,&:focus': {
          boxShadow: `inset 0px 0px 0px 2px currentColor`,
        },
      },
    },
  })}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${compose(space, layout)}
`
