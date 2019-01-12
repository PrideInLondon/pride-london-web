import React from 'react'
import {
  Accordion as AccessibleAccordion,
  AccordionItem as AccessibleAccordionItem,
  AccordionItemTitle as AccessibleAccordionItemTitle,
  AccordionItemBody as AccessibleAccordionItemBody,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'

const Accordion = () => (
  <AccessibleAccordion>
    <AccessibleAccordionItem uuid="0">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Question question questionnnn</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>Here's your answer</p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
    <AccessibleAccordionItem uuid="1">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Another question!</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
        </p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
    <AccessibleAccordionItem uuid="2">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Another question!</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
        </p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
    <AccessibleAccordionItem uuid="3">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Another question!</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
          Gummies chocolate cake marzipan powder pastry cheesecake lollipop.
        </p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
    <AccessibleAccordionItem uuid="4">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Question question questionnnn</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>Here's your answer</p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
    <AccessibleAccordionItem uuid="5">
      <AccessibleAccordionItemTitle>
        <h3 className="u-position-relative">Question question questionnnn</h3>
      </AccessibleAccordionItemTitle>
      <AccessibleAccordionItemBody>
        <p>Here's your answer</p>
      </AccessibleAccordionItemBody>
    </AccessibleAccordionItem>
  </AccessibleAccordion>
)

export default Accordion
