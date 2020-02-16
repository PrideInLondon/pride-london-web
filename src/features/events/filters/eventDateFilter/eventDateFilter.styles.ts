import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import { DatePickerWrapperProps } from './eventDateFilter.types'

export const DatePickerWrapper = styled.div<DatePickerWrapperProps>`
  border: none;
  border-radius: 4px;
  position: relative;

  .DayPicker_weekHeader_li {
    line-height: 1;
    font-size: 0.875rem;
  }

  .CalendarDay__selected {
    background-color: ${darken(0.1, theme.colors.eucalyptusGreen)};
    border: 1px solid #e4e7e7;

    &:focus,
    &:hover {
      background-color: ${darken(0.1, theme.colors.eucalyptusGreen)};
      border: 1px solid #e4e7e7;
    }
  }

  .CalendarDay__selected_span {
    background-color: ${theme.colors.eucalyptusGreen};
    border: 1px solid #e4e7e7;
    &:active,
    &:focus,
    &:hover {
      background-color: ${lighten(0.1, theme.colors.eucalyptusGreen)};
      border: 1px solid #e4e7e7;
    }
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:focus,
  .CalendarDay__hovered_span:hover {
    background-color: ${lighten(0.1, theme.colors.eucalyptusGreen)};
    border: 1px solid #e4e7e7;
    color: ${theme.colors.white};
  }

  .DateRangePickerInput {
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-right: 45px;
    padding-left: 10px;
  }

  .DateRangePickerInput_arrow {
    padding-right: 8px;
    display: flex;
    align-items: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .DateRangePicker {
    display: block;
    width: 100%;
  }

  .DateInput {
    background-color: transparent;
    width: 80px;
    box-sizing: content;
  }

  input.DateInput_input {
    appearance: none;
    border: none;
    color: ${theme.colors.black};
    font-size: 0.875rem;
    font-family: ${theme.fonts.body};
    line-height: 1.214;
    box-sizing: border-box;
    display: block;
    background-color: transparent;
    width: 100%;
    padding: 25px 0;

    &::placeholder {
      color: ${theme.colors.black};
      opacity: 1;
    }
  }

  .DayPickerKeyboardShortcuts_show__bottomRight {
    border-right-color: ${theme.colors.eucalyptusGreen};
  }

  ${media.tablet`
    display: flex;
    transition:  border-color 0.15s linear, background-color 0.15s linear;
    border: 2px solid ${({
      isFocused,
      datesSelected,
    }: DatePickerWrapperProps) =>
      isFocused
        ? theme.colors.eucalyptusGreen
        : datesSelected
        ? theme.colors.eucalyptusGreen
        : theme.colors.lightGrey};
    background-color: ${({
      isFocused,
      datesSelected,
    }: DatePickerWrapperProps) =>
      isFocused
        ? theme.colors.white
        : datesSelected
        ? theme.colors.eucalyptusGreen
        : theme.colors.lightGrey};

    input.DateInput_input {
      font-weight: 500;
      padding: 14px 0;
    }
  `};

  ${media.mobile`
    .DateRangePickerInput {
      padding-left: 20px;
    }
  `};
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  img {
    display: block;
  }
`

export const DatePickerHeader = styled.div`
  background-color: ${theme.colors.lightGrey};
  font-size: 1rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
  padding: 16px 10px;
  color: ${theme.colors.indigo};

  ${media.mobile`
    padding: 16px 20px;
  `};

  ${media.tablet`
    display: none;
  `};
`
