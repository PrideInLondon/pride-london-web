export function checkBreakpoint(breakpoint) {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  }
}

export function externalUrl(url) {
  const external = /^(http|https|ftp)/
  return external.test(url)
}

export function contactUrl(url) {
  const contact = /^(mailto:|tel:)/
  return contact.test(url)
}

export function handleSlug(slug) {
  const hasLeadingSlash = /^[\/]/
  if (hasLeadingSlash.test(slug)) return slug
  return `/${slug}`
}

export const noScroll = {
  on() {
    document.querySelector('html').classList.add('no-scroll')
  },
  off() {
    document.querySelector('html').classList.remove('no-scroll')
  },
  toggle() {
    document.querySelector('html').classList.toggle('no-scroll')
  },
}
