import React from 'react'
import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'
import { Consumer } from '../../../appContext'
import { Checkbox } from '../../../components/checkbox'

const Wrapper = styled.div`
  background-color: transparent;
  padding: 20px 10px 0 10px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  input {
    & + label {
      font-weight: 400;
    }

    &:checked {
      & + label {
        font-weight: 400;
      }
    }
  }

  ${media.mobile`
    padding: 9px 20px;
  `};

  ${media.tablet`
    background-color: ${props =>
      props.isChecked ? theme.colors.eucalyptusGreen : theme.colors.lightGrey};
    border: 2px solid ${props =>
      props.isChecked ? theme.colors.eucalyptusGreen : theme.colors.lightGrey};
    border-radius: 4px;
    transition: background-color 0.15s linear;

    &:focus-within {
      border-color: ${theme.colors.eucalyptusGreen}
    }

    input {
      border-color: ${props => props.isChecked && theme.colors.white};
      transition: border-color 0.15s linear;
      & + label {
        font-weight: 500;
      }
  
      &:checked {
        & + label {
          font-weight: 500;
        }
      }
    }
  `};
`
const FilterHeader = styled.div`
  padding: 16px 10px;
  background-color: ${theme.colors.lightGrey};
  font-size: 1rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
  color: ${theme.colors.indigo};

  ${media.mobile`
    padding: 16px 20px;
  `};

  ${media.tablet`
    display: none;
  `};
`

const EventFreeFilter = () => (
  <Consumer>
    {context => (
      <div>
        <FilterHeader>Price</FilterHeader>
        <Wrapper isChecked={context.state.filters.free}>
          <Checkbox
            id="free"
            value="free"
            checked={context.state.filters.free}
            label="Show only free events"
            name="free"
            handleChange={e => {
              context.actions.getCheckboxBool('free', e.target.checked)
              context.actions.closeSiblingFilters('free', e.target.checked)
            }}
          />
        </Wrapper>
      </div>
    )}
  </Consumer>
)

export default EventFreeFilter
