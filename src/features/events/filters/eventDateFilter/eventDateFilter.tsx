import React, { useState, useCallback, useContext } from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import theme from '../../../../theme/theme'
import { AppContext } from '../../../../components/appContext'
import CalendarIcon from '../../../../theme/assets/images/calendar-icon'
import {
  DatePickerHeader,
  DatePickerWrapper,
  Label,
} from './eventDateFilter.styles'
import { FocusedInput } from './eventDateFilter.types'

const EventDateFilter = () => {
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(null)
  const { state, actions } = useContext(AppContext)

  const handleFocusChange = useCallback(
    (newFocusedInput: FocusedInput) => {
      setFocusedInput(newFocusedInput)
      actions.closeSiblingFilters(newFocusedInput, true)

      if (!newFocusedInput) {
        if (state.filters.startDate) {
          actions.setDate('endDate', 'startDate')
        } else {
          actions.setDate('startDate', 'endDate')
        }
      }
    },
    [state.filters.startDate, actions]
  )

  return (
    <>
      <DatePickerHeader>Date</DatePickerHeader>
      <DatePickerWrapper
        datesSelected={Boolean(
          state.filters.startDate && state.filters.endDate
        )}
        isFocused={Boolean(focusedInput)}
      >
        <DateRangePicker
          startDate={state.filters.startDate}
          startDateId="start_date"
          endDate={state.filters.endDate}
          endDateId="end_date"
          onDatesChange={actions.getDatepickerValues}
          focusedInput={focusedInput}
          onFocusChange={newFocusedInput => handleFocusChange(newFocusedInput)}
          numberOfMonths={1}
          displayFormat="DD/MM/YYYY"
          minimumNights={0}
          noBorder
        />
        <Label htmlFor="start_date" aria-label="Select start date">
          <CalendarIcon color={theme.colors.indigo} />
        </Label>
      </DatePickerWrapper>
    </>
  )
}
export default EventDateFilter
