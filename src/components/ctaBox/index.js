import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from '../grid'
import Button from '../../components/button'
import {
  CTAWrapper,
  CTAPanel,
  CTATitle,
  CTABody,
  RelativeColumn,
} from './styles'

const CTABox = props => {
  const { title, body, link } = props
  return (
    <CTAWrapper>
      <Container>
        <Row>
          <RelativeColumn width={1}>
            <CTAPanel>
              {title && <CTATitle>{title}</CTATitle>}
              {body && <CTABody>{body}</CTABody>}
              {link.to && <Button to={link.to}>{link.text}</Button>}
            </CTAPanel>
          </RelativeColumn>
        </Row>
      </Container>
    </CTAWrapper>
  )
}

CTABox.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }),
}

CTABox.defaultProps = {
  title: null,
  body: null,
  link: null,
}

export default CTABox
