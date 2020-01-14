import Link from 'gatsby-link'

export function checkBreakpoint(breakpoint: number): boolean | void {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  }
}

export function externalUrl(url: string): boolean {
  const external = /^(http|https|ftp)/
  return external.test(url)
}

export function contactUrl(url: string): boolean {
  const contact = /^(mailto:|tel:)/
  return contact.test(url)
}

export function handleSlug(slug: string): string {
  const hasLeadingSlash = /^[/]/
  if (hasLeadingSlash.test(slug)) return slug
  return `/${slug}`
}

export interface RelativeLink {
  to: string
  as: typeof Link
}

export interface ExternalLink
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target' | 'rel'
  > {
  href: string
  as: 'a'
  target: string
  rel: string
}

export interface ContactLink
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target'
  > {
  href: string
  target: string
  as: 'a'
}

export interface DefaultLink
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  as: 'a'
}

export type LinkProps = DefaultLink | ExternalLink | ContactLink | RelativeLink

// Function to determine what properties to determine if gatsy Link or regular <a> tag should be used, and the relevant attributes.
export function handleUrl(url: string): LinkProps {
  switch (true) {
    case !externalUrl(url) && !contactUrl(url):
      return { to: handleSlug(url), as: Link }
    case externalUrl(url):
      return {
        href: url,
        rel: 'noopener noreferrer',
        target: '_blank',
        as: 'a',
      }
    case contactUrl(url):
      return { href: url, target: '_blank', as: 'a' }
    default:
      return { href: url, as: 'a' }
  }
}

export const noScroll = {
  on() {
    document.querySelector('html')!.classList.add('no-scroll')
  },
  off() {
    document.querySelector('html')!.classList.remove('no-scroll')
  },
  toggle() {
    document.querySelector('html')!.classList.toggle('no-scroll')
  },
}

export interface IndexSignature {
  [key: string]: any
}

/**
 * Pick out matching keys of object
 *
 * @param obj - object of properties
 * @param keys - array of keys to pick out of the object
 * @returns {object} - an object of matching keys only
 */
export function pick(obj: IndexSignature, keys: string[]): IndexSignature {
  return keys
    .map(k => (k in obj ? { [k]: obj[k] } : {}))
    .reduce((res, o) => Object.assign(res, o), {})
}

/**
 * Filters matching keys out of object
 *
 * @param obj - object of properties
 * @param keys - array of keys to pick out of the object
 * @returns {object} - an object without matching keys
 */
export function reject(obj: IndexSignature, keys: string[]): IndexSignature {
  const vkeys = Object.keys(obj).filter(k => !keys.includes(k))

  return pick(obj, vkeys)
}
