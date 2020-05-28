import React from 'react'
import styled from 'styled-components'
import { Box } from '../../components/box'
import { H4, P } from '../../components/typography'
import { Button } from '../../components/button'
import { sm } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { CTAProps } from './CTABox.types'

const Heading = styled(H4).attrs({
  as: 'h3',
})`
  text-align: left;
`

const ButtonWrapper = styled.div`
  margin-top: ${sm}px;

  ${mediaQueries.lg} {
    margin-top: auto;
  }
`

interface ActsOfAllyshipBoxProps {
  number: number
  heading: string
  cta: CTAProps
}

const ActsOfAllyshipBox: React.FC<ActsOfAllyshipBoxProps> = ({
  number,
  heading,
  children,
  cta: { text, ...ctaProps },
}) => (
  <Box display="flex" flexDirection="column">
    <Heading>
      0{number}.<br />
      {heading}
    </Heading>
    <P>{children}</P>
    <ButtonWrapper>
      <Button {...ctaProps}>{text}</Button>
    </ButtonWrapper>
  </Box>
)

export default ActsOfAllyshipBox
