import { ReactElement, FunctionComponent } from 'react'
import { ResponsiveValue, SpaceProps, LayoutProps } from 'styled-system'

export interface ButtonBaseProps extends SpaceProps, LayoutProps {
  variant?: ResponsiveValue<
    'primary' | 'secondary' | 'outline' | 'outline-white'
  >
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

export interface ButtonSignature
  extends Pick<
    FunctionComponent,
    'propTypes' | 'contextTypes' | 'defaultProps' | 'displayName'
  > {
  (props: ButtonProps): ReactElement
  (props: Omit<ButtonAsAnchorProps, 'href'>): ReactElement
}
