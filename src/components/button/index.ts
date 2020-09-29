import { ButtonAsAnchorProps, ButtonProps as Props } from './Button.types'

export { Button } from './Button'
export type ButtonProps = Omit<ButtonAsAnchorProps, 'href'> | Props
