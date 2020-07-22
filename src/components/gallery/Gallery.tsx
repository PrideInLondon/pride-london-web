import React, { useState, useEffect } from 'react'
import { GalleryProps } from './Gallery.types'

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
      {render({
        entries: entries.slice(0, numberOfEntriesToShow),
        moreEntriesToShow: numberOfEntriesToShow < entries.length,
        showNextPage: () =>
          setNumberOfEntriesToShow(numberOfEntriesToShow + pageSize),
      })}
    </>
  )
}
