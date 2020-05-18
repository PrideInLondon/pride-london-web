export interface CTALinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * URL to navigate to. Will render as a span if none provided. Is needed in contexts where the link appears in a clickable block.
   */
  to?: string
}
