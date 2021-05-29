import React, { createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { Container, Row, Column } from '../components/grid'
import ViewsCard from './ViewsCard'
import { CardContainer, ViewsTitle } from './ViewsContainer.styles'
import { settings } from './slickSettings'

let firstClientX, clientX

const preventTouch = (e) => {
  const minValue = 5 // threshold

  clientX = e.touches[0].clientX - firstClientX

  // Vertical scrolling does not work when you start swiping horizontally.
  if (Math.abs(clientX) > minValue) {
    e.returnValue = false
    return false
  }
}

const touchStart = (e) => (firstClientX = e.touches[0].clientX)

const ViewsContainer = ({ views }) => {
  // Methods here to prevent horizontal scrolling
  // while swiping with react-slick, see
  // https://github.com/akiran/react-slick/issues/1240

  const containerRef = createRef()

  useEffect(() => {
    const ref = containerRef?.current || null
    if (ref) {
      ref.addEventListener('touchstart', touchStart)
      ref.addEventListener('touchmove', preventTouch, {
        passive: false,
      })
    }
    return () => {
      if (ref) {
        ref.removeEventListener('touchstart', touchStart)
        ref.removeEventListener('touchmove', preventTouch, {
          passive: false,
        })
      }
    }
  })

  return (
    <section>
      <Container>
        <Row>
          <Column width={1}>
            <CardContainer>
              <ViewsTitle isLight isCentered>
                Views
              </ViewsTitle>
              <div ref={containerRef}>
                <Slider {...settings}>
                  {views.map((view) => (
                    <ViewsCard {...view} key={view.id} />
                  ))}
                </Slider>
              </div>
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
