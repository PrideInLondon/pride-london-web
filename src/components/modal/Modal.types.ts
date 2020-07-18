import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import { SpaceProps, LayoutProps, ZIndexProps } from 'styled-system'

type RenderProp<T> = (props: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}) => T
export interface ModalProps extends SpaceProps, LayoutProps, ZIndexProps {
  /**
   * Initial state of the modal, if it is open or closed.
   */
  open?: boolean
  /**
   * Element / Component that when clicked opens the modal (e.g. <button>, <a>)
   */
  trigger?: ReactElement<any> | RenderProp<ReactElement>
  /**
   * Children can either be React JSX / Component or a Render Prop function which exposes isOpen and setIsOpen method.
   */
  children?: ReactNode | RenderProp<ReactNode>
  /**
   * Callback to be executed whenever the modal opens.
   */
  onOpen?: () => void
  /**
   * Callback to be executed whenever the modal closes.
   */
  onClose?: () => void
  /** Determines if the modal can be dismissed by clicking the background outside the modal box */
  dismissable?: boolean
}
