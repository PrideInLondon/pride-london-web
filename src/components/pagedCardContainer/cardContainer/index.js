import React from 'react'
import PropTypes from 'prop-types'
import { Container, FlexColumn, Row } from '../../grid'

const CardContainer = ({ CardComponent, cardContent, className }) => (
  <Container className={className}>
    <Row>
      {cardContent.map(({ id, ...content }) => (
        <FlexColumn
          key={id}
          width={[
            1, // 100% between 0px screen width and first breakpoint (375px)
            1, // 100% between first breakpoint(375px) and second breakpoint (768px)
            1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
            1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
          ]}
          py={[2, 2, 2, 3]}
        >
          <CardComponent {...content} />
        </FlexColumn>
      ))}
    </Row>
  </Container>
)

CardContainer.propTypes = {
  CardComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  cardContent: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any }))
    .isRequired,
  className: PropTypes.string,
}

CardContainer.defaultProps = {
  className: '',
}

export default CardContainer
