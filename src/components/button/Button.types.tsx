import { ReactElement, FunctionComponent } from 'react'
import { ResponsiveValue, SpaceProps } from 'styled-system'

interface Props extends SpaceProps {
  variant?: ResponsiveValue<'primary' | 'secondary' | 'outline'>
}

export interface ButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: undefined
}

export interface ButtonAsAnchorProps
  extends Props,
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
