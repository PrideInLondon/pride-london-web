import React, { useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { space } from 'styled-system'
import { useTransition } from 'react-spring/web.cjs'
import { hideOthers } from 'aria-hidden'
import FocusLock from 'react-focus-lock'
import { noScroll } from '../../utils/style-utils'
import { spacing } from '../../theme/space'
import { usePickedProps } from '../../hooks/usePickedProps'

import { Background, ModalBody, ModalCard, ModalWrapper } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal = ({
  children,
  open = false,
  trigger,
  zIndex,
  onOpen,
  onClose,
  dismissable,
  ...props
}: ModalProps) => {
  const [picked, rest] = usePickedProps(props, space.propNames ?? [])
  const [isOpen, setIsOpen] = useState(open)
  const ref = useRef<HTMLDivElement>(null)
  const transition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: `translate3d(0, -${spacing.xl}, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(0, -${spacing.xl}, 0)` },
  })

  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    setTimeout(() => {
      isOpen && noScroll.on()
    })
    const undo = ref && ref.current && hideOthers(ref.current)
    const cleanup = () => {
      noScroll.off()
      undo && undo()
    }

    // Prevent onOpen or onClose callbacks executing on initial render
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (!isOpen) {
      cleanup()
    }
    if (isOpen && onOpen) {
      onOpen()
    }
    if (!isOpen && onClose) {
      onClose()
    }
    return () => {
      cleanup()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (dismissable) {
      e.keyCode === 27 && setIsOpen(false)
    }
  }
  if (typeof document !== 'undefined')
    return (
      <>
        {trigger &&
          React.cloneElement(
            typeof trigger === 'function'
              ? trigger({ isOpen, setIsOpen })
              : trigger,
            {
              onClick: () => setIsOpen(true),
            }
          )}
        {ReactDOM.createPortal(
          <>
            {transition.map(
              ({ item, key, props: animation }) =>
                item && (
                  <FocusLock disabled={!isOpen} returnFocus key={key} ref={ref}>
                    <ModalWrapper
                      zIndex={zIndex}
                      style={{ opacity: animation.opacity }}
                      data-testid="modal-wrapper"
                      aria-modal="true"
                      role="dialog"
                    >
                      <ModalCard
                        onKeyDown={onKeyDown}
                        data-testid="modal-card"
                        tabIndex={-1}
                        {...rest}
                      >
                        <ModalBody
                          style={{ transform: animation.transform }}
                          {...picked}
                        >
                          {children && typeof children === 'function'
                            ? children({ isOpen, setIsOpen })
                            : children}
                        </ModalBody>
                      </ModalCard>
                      <Background
                        onClick={() => dismissable && setIsOpen(false)}
                        data-testid="modal-background"
                      />
                    </ModalWrapper>
                  </FocusLock>
                )
            )}
          </>,
          document.body
        )}
      </>
    )
  return null
}

Modal.defaultProps = {
  maxWidth: '1062px',
  paddingTop: { default: spacing.xxl_mob, md: spacing.xxl },
  paddingBottom: { default: spacing.xxl_mob, md: spacing.xxl },
  paddingRight: { default: spacing.lg },
  paddingLeft: { default: spacing.lg },
  width: '100%',
  dismissable: true,
}
