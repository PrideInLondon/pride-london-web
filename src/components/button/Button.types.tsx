import { ResponsiveValue } from 'styled-system'

interface Props {
  variant?: ResponsiveValue<
    'primary' | 'secondary' | 'primary-outline' | 'secondary-outline'
  >
  to?: string
}

export interface ButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}
