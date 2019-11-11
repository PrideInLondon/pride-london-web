import Link from 'gatsby-link'

export function checkBreakpoint(breakpoint: number) {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  }
}

export function externalUrl(url: string) {
  const external = /^(http|https|ftp)/
  return external.test(url)
}

export function contactUrl(url: string) {
  const contact = /^(mailto:|tel:)/
  return contact.test(url)
}

export function handleSlug(slug: string) {
  const hasLeadingSlash = /^[/]/
  if (hasLeadingSlash.test(slug)) return slug
  return `/${slug}`
}

export interface RelativeLink {
  to: string
  as: typeof Link
}

export interface ExternalLink {
  href: string
  as: 'a'
  target: string
  rel: string
}

export interface ContactLink {
  href: string
  target: string
  as: 'a'
}

export interface DefaultLink {
  href: string
  as: 'a'
}

export type LinkProps = DefaultLink | ExternalLink | ContactLink | RelativeLink

// Function to determine what properties to determine if gatsy Link or regular <a> tag should be used, and the relevant attributes.
export function handleUrl(url: string): LinkProps {
  switch (true) {
    case url && !externalUrl(url) && !contactUrl(url):
      return { to: handleSlug(url), as: Link }
    case url && externalUrl(url):
      return {
        href: url,
        rel: 'noopener noreferrer',
        target: '_blank',
        as: 'a',
      }
    case url && contactUrl(url):
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
