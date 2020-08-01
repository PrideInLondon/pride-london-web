import React from 'react'
import { fetchTypeformId } from '../../utils/location-utils'
import { Container, Row } from '../grid'
import { Button } from '../button'
import { H6, P } from '../typography/Typography'
import { Typeform } from '../typeform'
import { CTAWrapper, CTAPanel, RelativeColumn } from './CTABox.styles'
import { CTABoxProps } from './CTABox.types'

const ButtonWrapper: React.FC<{ to: string; text: string }> = ({
  to,
  text,
}) => {
  const typeformId = fetchTypeformId(to)
  return typeformId ? (
    <Typeform id={typeformId}>
      <Button>{text}</Button>
    </Typeform>
  ) : (
    <Button to={to}>{text}</Button>
  )
}

export const CTABox: React.FC<CTABoxProps> = ({
  title,
  body,
  link,
  ...props
}) => (
  <CTAWrapper>
    <Container>
      <Row>
        <RelativeColumn width={1}>
          <CTAPanel {...props}>
            {title && (
              <H6 as="h2" color="white">
                {title}
              </H6>
            )}
            {body && <P color="white">{body}</P>}
            {link && <ButtonWrapper {...link} />}
          </CTAPanel>
        </RelativeColumn>
      </Row>
    </Container>
  </CTAWrapper>
)
