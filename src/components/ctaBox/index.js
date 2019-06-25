import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from '../grid'
import {
  CTAWrapper,
  CTAPanel,
  CTATitle,
  CTABody,
  CTAButton,
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
              {link.to && (
                <CTAButton to={link.to} primary>
                  {link.text}
                </CTAButton>
              )}
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
