import { ButtonSignatureProps } from '../../components/button/Button.types'
import { BoxProps } from '../../components/box'

interface CTABoxButtonProps {
  text: string
}

export type CTAProps = CTABoxButtonProps & ButtonSignatureProps

export interface CTABoxProps extends BoxProps {
  title: string
  cta: CTAProps
}
