import React from 'react'
import { handleUrl } from '../../utils/location-utils'
import { StyledButton } from './YmuwButton.styles'
import {
  ButtonAsAnchorProps,
  ButtonProps,
  ButtonSignature,
} from './YmuwButton.types'

/**
 * Guard to check if `to` exists in props
 */
export const hasToProp = (
  props: ButtonProps | Omit<ButtonAsAnchorProps, 'href'>
): props is Omit<ButtonAsAnchorProps, 'href'> => 'to' in props

export const YmuwButton: ButtonSignature = (
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

YmuwButton.defaultProps = {
  variant: 'primary',
}
