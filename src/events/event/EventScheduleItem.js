import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme/theme'

const Table = styled.table`
  text-align: left;
  width: 100%;
  margin-bottom: 18px;
`

const TableHeader = styled.th`
  padding: 10px 20px;
  font-size: 1rem;
  background: ${theme.colors.lightGrey};
  color: ${theme.colors.indigo};
  font-family: ${theme.fonts.title};
  font-weight: 300;
`

const TableItem = styled.td`
  padding: 10px 20px;
  border-bottom: 1px solid ${theme.colors.mediumGrey};
`

const TableItemTime = styled(TableItem)`
  font-weight: bold;
  width: 60px;
`

const EventScheduleItem = props => {
  if (!props.data.length) return null

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <TableHeader colSpan="2">{props.title}</TableHeader>
          </tr>
          {props.data.map(item => (
            <tr key={item.id}>
              <TableItemTime>{item.startTime}</TableItemTime>
              <TableItem>{item.title}</TableItem>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

EventScheduleItem.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
}

EventScheduleItem.defaultProps = {
  data: [],
  title: '',
}

export default EventScheduleItem
