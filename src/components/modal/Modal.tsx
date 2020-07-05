import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { useTransition } from 'react-spring/web.cjs'
import { hideOthers } from 'aria-hidden'
import FocusLock from 'react-focus-lock'
import { noScroll } from '../../utils/style-utils'
import { space } from '../../theme/space'

import { Background, ModalBody, ModalCard, ModalWrapper } from './Modal.styles'
import { ModalProps } from './Modal.types'

export const Modal = ({
  children,
  open = false,
  trigger,
  zIndex,
  onOpen,
  onClose,
  ...props
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const ref = useRef<HTMLDivElement>(null)
  const transition = useTransition(isOpen, null, {
    from: { opacity: 0, transform: `translate3d(0, -${space.xl}, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(0, -${space.xl}, 0)` },
  })

  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    isOpen && noScroll.on()
    const undo = ref && ref.current && hideOthers(ref.current)

    // Prevent onOpen or onClose callbacks executing on initial render
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    if (isOpen && onOpen) {
      onOpen()
    }
    if (!isOpen && onClose) {
      onClose()
    }

    return () => {
      noScroll.off()
      undo && undo()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    e.keyCode === 27 && setIsOpen(false)
  }, [])

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
                      minWidth={{ default: '100%', md: '600px' }}
                      minHeight={{ default: '100%', md: 'auto' }}
                      maxWidth="600px"
                      maxHeight={{ default: '100%', md: '80%' }}
                      data-testid="modal-card"
                      {...props}
                    >
                      <ModalBody style={{ transform: animation.transform }}>
                        {children && typeof children === 'function'
                          ? children({ isOpen, setIsOpen })
                          : children}
                      </ModalBody>
                    </ModalCard>
                    <Background
                      onClick={() => setIsOpen(false)}
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
}
