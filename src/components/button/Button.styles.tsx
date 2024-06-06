import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { variant, space, layout, compose } from 'styled-system'
import { darken, lighten } from 'polished'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { useSpaceLayoutProps } from '../../hooks/useSpaceLayoutProps'
import { ButtonAsAnchorProps, ButtonProps } from './Button.types'

type StyledButtonProps =
  | (ButtonAsAnchorProps & { renderAs: 'a' | typeof Link | string })
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
  padding: 12px 35px;
  border-radius: 4px;
  font-family: ${fonts.title};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.388;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.15s linear, border 0.15s linear;

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
      tertiary: {
        border: 'none',
        borderRadius: 0,
        padding: '0 0 4px 0',
        color: colors.indigo,
        fontFamily: fonts.body,
        backgroundImage: `linear-gradient(to bottom, ${colors.eucalyptusGreen} 0%, ${colors.eucalyptusGreen} calc(100% - 2px), ${colors.indigo} calc(100% - 2px), ${colors.indigo} 100%)`,
        backgroundPosition: '0 100%',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '4px 4px',
        transition: 'background-size .2s',
        '&:hover,&:focus': {
          backgroundSize: '4px 100%',
        },
      },
      mobile: {
        border: `2px solid ${colors.eucalyptusGreen}`,
        backgroundColor: colors.eucalyptusGreen,
        color: colors.indigo,
        '&:hover,&:focus': {
          backgroundColor: lighten(0.1, colors.eucalyptusGreen),
          borderColor: lighten(0.1, colors.eucalyptusGreen),
        },
        padding: `5px`,
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
