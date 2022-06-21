import React, { ReactNode } from 'react'
import { AccordionContainer } from './Accordion.styles'

type AccordionProps = {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return <AccordionContainer>{children}</AccordionContainer>
}
