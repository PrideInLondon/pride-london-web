import React from 'react'
import { Container, Row } from '../grid'

export const Gallery = <T,>({
  entries,
  render,
}: {
  entries: T[]
  render: (renderProps: { entries: T[] }) => React.ReactNode
}) => (
  <Container>
    <Row>{render({ entries })}</Row>
  </Container>
)
