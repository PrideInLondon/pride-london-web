import React from 'react'
import { Container, Row } from '../grid'
import { Button } from '../button'
import { H6, P } from '../typography/Typography'
import { CTAWrapper, CTAPanel, RelativeColumn } from './CTABox.styles'
import { CTABoxProps } from './CTABox.types'

const CTABox: React.FC<CTABoxProps> = ({ title, body, link }) => {
  return (
    <CTAWrapper>
      <Container>
        <Row>
          <RelativeColumn width={1}>
            <CTAPanel>
              {title && (
                <H6 as="h2" color="white">
                  {title}
                </H6>
              )}
              {body && <P color="white">{body}</P>}
              {link && <Button to={link.to}>{link.text}</Button>}
            </CTAPanel>
          </RelativeColumn>
        </Row>
      </Container>
    </CTAWrapper>
  )
}

export default CTABox
