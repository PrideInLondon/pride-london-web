import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { rgba } from 'polished'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { Consumer } from '../appContext'
import Checkbox from '../checkbox'
import constants from '../../constants'

const List = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  background-color: ${theme.colors.white};

  ${media.tablet`
    box-shadow: 0 2px 4px 0 ${rgba(theme.colors.black, 0.2)};
  `};
`
const ListItem = styled.li`
  padding: 8px 10px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    transition: background-color 0.15s linear;
    border-radius: 4px;
    
    &:hover {
      background-color: ${theme.colors.lightGrey};
    }
  `};
`

class CheckboxSet extends Component {
  makeId = string => {
    const id = string
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/ /g, '_')
      .toLowerCase()
    return `${this.props.filterName}_${id}`
  }

  render() {
    const { filterName, sort } = this.props
    const options = constants[filterName]

    if (sort) {
      options.sort()
      if (sort === 'DESC') {
        options.reverse()
      }
    }

    return (
      <Consumer>
        {context => (
          <List>
            {options.map(option => (
              <ListItem key={this.makeId(option)}>
                <Checkbox
                  checked={
                    context.state.filters[filterName].indexOf(option) >= 0
                  }
                  label={option}
                  value={option}
                  id={this.makeId(option)}
                  name={this.makeId(option)}
                  handleChange={e =>
                    context.actions.getCheckboxSetValues(e, filterName)
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Consumer>
    )
  }
}

CheckboxSet.propTypes = {
  filterName: PropTypes.string.isRequired,
  sort: PropTypes.oneOf(['ASC', 'DESC']),
}

CheckboxSet.defaultProps = {
  sort: null,
}

export default CheckboxSet
