import React, { useState, useEffect } from 'react'
import { Container, Row, Column } from '../grid'
import { ButtonSignatureProps } from '../button/Button.types'

interface GalleryProps {
  paged?: {
    pageSize: number
    ShowMoreButton: React.ReactElement<ButtonSignatureProps>
  }
}

export const Gallery = <T,>({
  entries,
  paged: { pageSize, ShowMoreButton } = {
    pageSize: entries.length,
    ShowMoreButton: <></>,
  },
  render,
}: GalleryProps & {
  entries: T[]
  render: (renderProps: { entries: T[] }) => React.ReactNode
}) => {
  const [numberOfEntriesToShow, setNumberOfEntriesToShow] = useState(pageSize)

  useEffect(() => {
    setNumberOfEntriesToShow(pageSize)
  }, [pageSize])

  return (
    <>
      <Container>
        <Row>
          {render({ entries: entries.slice(0, numberOfEntriesToShow) })}
        </Row>
      </Container>
      {numberOfEntriesToShow < entries.length && (
        <Row>
          <Column mx="auto">
            {React.cloneElement(ShowMoreButton, {
              onClick: () =>
                setNumberOfEntriesToShow(numberOfEntriesToShow + pageSize),
            })}
          </Column>
        </Row>
      )}
    </>
  )
}
