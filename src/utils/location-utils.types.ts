import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
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
