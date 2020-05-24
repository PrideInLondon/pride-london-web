import React from 'react'
import { Box, BoxProps } from '../../components/box'
import { H3 } from '../../components/typography'
import { Button } from '../../components/button'

interface CTABoxProps extends BoxProps {
  title: string
  cta: {
    text: string
    to: string
  }
}

const CTABox: React.FC<CTABoxProps> = ({
  title,
  cta: { text, to },
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
    <Button ml="auto" to={to}>
      {text}
    </Button>
  </Box>
)

export default CTABox
