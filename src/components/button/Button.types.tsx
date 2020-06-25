import { ReactElement, FunctionComponent } from 'react'
import { ResponsiveValue, SpaceProps, LayoutProps } from 'styled-system'

export const VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'outline-white',
] as const

export type ButtonVariant = typeof VARIANTS[number]

export interface ButtonBaseProps extends SpaceProps, LayoutProps {
  variant?: ResponsiveValue<ButtonVariant>
}

export interface ButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: undefined
}

export interface ButtonAsAnchorProps
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> {
  to?: string
}

export type ButtonSignatureProps =
  | ButtonProps
  | Omit<ButtonAsAnchorProps, 'href'>

export interface ButtonSignature
  extends Pick<
    FunctionComponent,
    'propTypes' | 'contextTypes' | 'defaultProps' | 'displayName'
  > {
  (props: ButtonSignatureProps): ReactElement
}
