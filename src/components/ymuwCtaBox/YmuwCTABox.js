import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row } from '../grid'
import { YmuwButton } from '../ymuwButton'
import {
  CTAWrapper,
  CTAPanel,
  CTATitle,
  CTABody,
  RelativeColumn,
} from './YmuwCTABox.styles'

const YmuwCTABox = props => {
  const { title, body, link } = props
  return (
    <CTAWrapper>
      <Container>
        <Row>
          <RelativeColumn width={1}>
            <CTAPanel>
              {title && <CTATitle>{title}</CTATitle>}
              {body && <CTABody>{body}</CTABody>}
              {link.to && <YmuwButton to={link.to}>{link.text}</YmuwButton>}
            </CTAPanel>
          </RelativeColumn>
        </Row>
      </Container>
    </CTAWrapper>
  )
}

YmuwCTABox.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }),
}

YmuwCTABox.defaultProps = {
  title: null,
  body: null,
  link: null,
}

export default YmuwCTABox
