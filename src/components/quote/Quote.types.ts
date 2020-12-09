import { SpaceProps, LayoutProps } from 'styled-system'

export interface QuoteProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    SpaceProps,
    LayoutProps {
  quote: string
  caption: string
}
