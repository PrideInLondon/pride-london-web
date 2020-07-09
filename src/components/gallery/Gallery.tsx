import React, { useState, useEffect } from 'react'
import { FlexColumn } from '../grid'
import { StyledContainer } from './Gallery.styles'
import { GalleryEntryProps, GalleryProps } from './Gallery.types'

export const GalleryEntry: React.FC<GalleryEntryProps> = ({
  variant,
  children,
  ...props
}) => {
  switch (variant) {
    case 'grid':
      return <FlexColumn {...props}>{children}</FlexColumn>
    case 'masonry':
      return <div>{children}</div>
  }
}

export const Gallery = <T,>({
  variant,
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
    <StyledContainer {...{ variant }}>
      {render({
        entries: entries.slice(0, numberOfEntriesToShow),
        moreEntriesToShow: numberOfEntriesToShow < entries.length,
        showNextPage: () =>
          setNumberOfEntriesToShow(numberOfEntriesToShow + pageSize),
      })}
    </StyledContainer>
  )
}
