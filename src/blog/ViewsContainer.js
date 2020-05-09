import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { Container, Row, Column } from '../components/grid'
import ViewsCard from './ViewsCard'
import { CardContainer, ViewsTitle } from './ViewsContainer.styles'
import { settings } from './slickSettings'

const ViewsContainer = ({ views }) => {
  // Methods here to prevent horizontal scrolling
  // while swiping with react-slick, see
  // https://github.com/akiran/react-slick/issues/1240

  const [firstClientX, setFirstClientX] = useState()
  const [firstClientY, setFirstClientY] = useState()
  const [clientX, setClientX] = useState()

  useEffect(() => {
    const touchStart = e => {
      setFirstClientX(e.touches[0].clientX)
      setFirstClientY(e.touches[0].clientY)
    }

    const preventTouch = e => {
      const minValue = 5 // threshold

      setClientX(e.touches[0].clientX - firstClientX)

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(clientX) > minValue) {
        e.preventDefault()
        e.returnValue = false
        return false
      }
    }

    window.addEventListener('touchstart', touchStart)
    window.addEventListener('touchmove', preventTouch, { passive: false })
    return () => {
      window.removeEventListener('touchstart', touchStart)
      window.removeEventListener('touchmove', preventTouch, {
        passive: false,
      })
    }
  }, [clientX, firstClientX, firstClientY])

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
