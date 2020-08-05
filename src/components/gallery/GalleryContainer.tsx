import React from 'react'
import { Masonry } from '../masonry'
import { Grid } from './GalleryContainer.styles'
import { GalleryContainerProps } from './GalleryContainer.types'

export const GalleryContainer: React.FC<GalleryContainerProps> = ({
  variant,
  columns,
  children,
  ...props
}) => {
  switch (variant) {
    case 'grid':
      return (
        <Grid
          width={Object.keys(columns).reduce(
            (acc, column) => ({ ...acc, [column]: 1 / columns[column] }),
            {}
          )}
          {...props}
        >
          {children}
        </Grid>
      )
    case 'masonry':
      return (
        <Masonry {...{ columns }} {...props}>
          {children}
        </Masonry>
      )
  }
}
