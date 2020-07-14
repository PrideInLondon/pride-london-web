import React from 'react'
import { Masonry } from '../masonry'
import { Grid } from './GalleryContainer.styles'
import { GalleryContainerProps } from './GalleryContainer.types'

export const GalleryContainer: React.FC<GalleryContainerProps> = ({
  variant,
  columns,
  children,
}) => {
  switch (variant) {
    case 'grid':
      return (
        <Grid
          columns={Object.keys(columns).reduce(
            (acc, column) => ({ ...acc, [column]: 1 / columns[column] }),
            {}
          )}
        >
          {children}
        </Grid>
      )
    case 'masonry':
      return <Masonry {...{ columns }}>{children}</Masonry>
  }
}
