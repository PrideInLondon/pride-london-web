import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ViewsCard from '../../components/viewsCard'
import { Container, Row, Column } from '../../../../components/grid'
import { CardContainer, ViewsTitle } from './styles'
import { settings } from './slickSettings'

const ViewsContainer = ({ views }) => {
  return (
    <section>
      <Container>
        <Row>
          <Column width={1}>
            <CardContainer>
              <ViewsTitle isLight isCentered>
                Views
              </ViewsTitle>
              <Slider {...settings}>
                {views.map(view => (
                  <ViewsCard {...view} key={view.id} />
                ))}
              </Slider>
            </CardContainer>
          </Column>
        </Row>
      </Container>
    </section>
  )
}

ViewsContainer.propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({})),
}

ViewsContainer.defaultProps = {
  views: [],
}

export default ViewsContainer
