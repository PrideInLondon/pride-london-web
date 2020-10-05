import React from 'react'
import Link from 'gatsby-link'
import {
  isExternalUrl,
  isContactUrl,
  handleUrl,
} from '../../utils/location-utils'
import { RelativeLink } from '../../utils/location-utils.types'
import { NavigateProps } from './Navigate.types'

export const Navigate: React.FC<NavigateProps> = ({
  to,
  children,
  ...props
}) => {
  const combinedProps = {
    ...handleUrl(to),
    ...props,
  }
  return !isExternalUrl(to) && !isContactUrl(to) ? (
    <Link {...(combinedProps as RelativeLink)}>{children}</Link>
  ) : (
    <a {...combinedProps}>{children}</a>
  )
}
