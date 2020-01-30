import { FocusedInputShape } from 'react-dates'
import { Maybe } from '../../../../types'

export type FocusedInput = Maybe<FocusedInputShape>

export type DatePickerWrapperProps = {
  isFocused: boolean
  datesSelected: boolean
}
