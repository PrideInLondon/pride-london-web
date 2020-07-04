import React, { useState, useEffect } from 'react'
import { Container, Row } from '../grid'

interface GalleryProps {
  pageSize?: number
}

export const Gallery = <T,>({
  entries,
  render,
  pageSize = entries.length,
}: GalleryProps & {
  entries: T[]
  render: (renderProps: {
    entries: T[]
    moreEntriesToShow: boolean
    showNextPage: () => void
  }) => React.ReactNode
}) => {
  const [numberOfEntriesToShow, setNumberOfEntriesToShow] = useState(pageSize)

  useEffect(() => {
    setNumberOfEntriesToShow(pageSize)
  }, [pageSize])

  return (
    <>
      <Container>
        <Row>
          {render({
            entries: entries.slice(0, numberOfEntriesToShow),
            moreEntriesToShow: numberOfEntriesToShow < entries.length,
            showNextPage: () =>
              setNumberOfEntriesToShow(numberOfEntriesToShow + pageSize),
          })}
        </Row>
      </Container>
    </>
  )
}
