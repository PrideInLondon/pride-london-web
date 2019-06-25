import React from 'react'
import PropTypes from 'prop-types'
import { Column, Row } from '../../grid'
import Button from '../../button'

const ShowMoreButton = ({ text, onClick }) => (
  <Row pb={[30, 30, 50]}>
    <Column mx="auto" pt={[30, 30, 50]}>
      <Button onClick={onClick} primary>
        {text}
      </Button>
    </Column>
  </Row>
)

ShowMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ShowMoreButton
