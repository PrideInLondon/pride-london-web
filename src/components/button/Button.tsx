import React from 'react'
import { handleUrl } from '../../utilities'
import { StyledButton } from './Button.styles'
import {
  ButtonAsAnchorProps,
  ButtonProps,
  ButtonSignature,
} from './Button.types'

/**
 * Guard to check if `to` exists in props
 */
export const hasToProp = (
  props: ButtonProps | Omit<ButtonAsAnchorProps, 'href'>
): props is Omit<ButtonAsAnchorProps, 'href'> => 'to' in props

export const Button: ButtonSignature = (
  props: Omit<ButtonAsAnchorProps, 'href'> | ButtonProps
) => {
  const { to, children } = props

  if (hasToProp(props)) {
    const { as, ...anchorProps } = handleUrl(to!)
    return (
      <StyledButton renderAs={as} {...anchorProps} {...props}>
        {children}
      </StyledButton>
    )
  }
  return (
    <StyledButton renderAs="button" {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
}
