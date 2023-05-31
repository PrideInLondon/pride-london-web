import Link from 'gatsby-link'
import { LinkProps } from './location-utils.types'

export const isExternalUrl = (url: string): boolean =>
  /^(http|https|ftp):\/\/.+/.test(url)

export const isContactUrl = (url: string): boolean =>
  /^(mailto|tel):.+/.test(url)

export const handleSlug = (slug: string): string =>
  /^[/]/.test(slug) ? slug : `/${slug}`

/**
 * Function to determine what properties to determine if Gatsby's Link or
 * regular a tag should be used, and the relevant attributes.
 */
export const handleUrl = (url: string): LinkProps => {
  switch (true) {
    case !url:
      return {
        // eslint-disable-next-line no-script-url
        href: 'javascript:void(0);',
        as: 'a',
      }
    case isExternalUrl(url):
      return {
        href: url,
        rel: 'noopener noreferrer',
        target: '_blank',
        as: 'a',
      }
    case isContactUrl(url):
      return { href: url, target: '_blank', as: 'a' }
    default:
      return { to: handleSlug(url), as: Link }
  }
}

export const fetchTypeformId = (to: string) => {
  const typeform = /https:\/\/.*typeform.com\/to\/(?<id>.+)/.exec(to)
  return typeform && typeform.groups && typeform.groups.id
}
