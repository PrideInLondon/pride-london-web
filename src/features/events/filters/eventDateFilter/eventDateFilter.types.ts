import { FocusedInputShape } from 'react-dates'

export type FocusedInput = FocusedInputShape | null

export type DatePickerWrapperProps = {
  isFocused: boolean
  datesSelected: boolean
}
