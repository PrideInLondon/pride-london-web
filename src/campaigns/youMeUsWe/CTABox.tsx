import React from 'react'
import { Box, BoxProps } from '../../components/box'
import { H3 } from '../../components/typography'
import { Button } from '../../components/button'
import { ButtonSignatureProps } from '../../components/button/Button.types'

interface CTABoxButtonProps {
  text: string
}

interface CTABoxProps extends BoxProps {
  title: string
  cta: CTABoxButtonProps & ButtonSignatureProps
}

const CTABox: React.FC<CTABoxProps> = ({
  title,
  cta: { text, ...ctaProps },
  ...props
}) => (
  <Box
    display={{ default: 'block', md: 'flex' }}
    alignItems="center"
    justifyContent="spaceBetween"
    maxWidth={1050}
    width={1}
    style={{ textAlign: 'left' }}
    {...props}
  >
    <H3 mb={{ default: 'lg', md: '0' }}>{title}</H3>
    <Button ml="auto" {...ctaProps}>
      {text}
    </Button>
  </Box>
)

export default CTABox
