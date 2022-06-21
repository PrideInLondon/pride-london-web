import React, { ReactNode, useState } from 'react'
import {
  AccordionButton,
  AccordionChevron,
  AccordionItemContainer,
  AccordionButtonTitle,
} from './Accordion.styles'

export const Chevron = () => (
  <AccordionChevron
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z" />
  </AccordionChevron>
)

type AccordionItemProps = {
  children: ReactNode
  open: boolean
}

export const AccordionItem = ({
  children,
  open = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const [prevIsOpen, setPrevIsOpen] = useState(open)
  const [animation, setAnimation] = useState('')
  const id = useId('accordion-item')
  const prefix = usePrefix()
  const className = cx({
    [`${prefix}--accordion__item`]: true,
    [`${prefix}--accordion__item--active`]: isOpen,
    [`${prefix}--accordion__item--${animation}`]: animation,
    [`${prefix}--accordion__item--disabled`]: disabled,
    [customClassName]: !!customClassName,
  })

  const Toggle = renderToggle || renderExpando // remove renderExpando in next major release

  if (open !== prevIsOpen) {
    setAnimation(isOpen ? 'collapsing' : 'expanding')
    setIsOpen(open)
    setPrevIsOpen(open)
  }

  // When the AccordionItem heading is clicked, toggle the open state of the
  // panel
  function onClick(event) {
    const nextValue = !isOpen
    setAnimation(isOpen ? 'collapsing' : 'expanding')
    setIsOpen(nextValue)
    if (onHeadingClick) {
      // TODO: normalize signature, potentially:
      // onHeadingClick :: (event: Event, state: { isOpen: Boolean }) => any
      onHeadingClick({ isOpen: nextValue, event })
    }
  }

  // If the AccordionItem is open, and the user hits the ESC key, then close it
  function onKeyDown(event) {
    if (isOpen && match(event, keys.Escape)) {
      setIsOpen(false)
    }
  }

  function handleAnimationEnd(event) {
    if (rest.handleAnimationEnd) {
      rest.handleAnimationEnd(event)
    }
    setAnimation('')
  }

  return (
    <AccordionItemContainer
      className={className}
      onAnimationEnd={handleAnimationEnd}
    >
      <AccordionButton
        aria-controls={id}
        aria-expanded={isOpen}
        className={`${prefix}--accordion__heading`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        type="button"
      >
        <Chevron className={`${prefix}--accordion__arrow`} />
        <AccordionButtonTitle id={id}>{children}</AccordionButtonTitle>
      </AccordionButton>
      <div id={id} className={`${prefix}--accordion__content`}>
        {children}
      </div>
    </AccordionItemContainer>
  )
}
