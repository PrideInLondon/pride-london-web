import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import EventsContext from './eventsContext'

/**
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
export const eventsTestRender = (
  children: ReactNode,
  { eventsProviderProps, ...renderOptions }: any
) => {
  return render(
    <EventsContext.Provider {...eventsProviderProps}>
      {children}
    </EventsContext.Provider>,
    renderOptions
  )
}
