import React, { useEffect, useRef, useState } from 'react'
import { useEventListener } from '../../hooks/useEventListener'
import { widths } from '../../theme/breakpoints'
import { Wrapper, Column } from './Masonry.styles'
import { MasonryProps } from './Masonry.types'

export const calculateColumns = (
  currentWidth: number,
  columns: { [key: string]: number }
) => {
  const keys = Object.keys(columns)

  for (var i = keys.length - 1; i >= 0; i--) {
    const key = keys[i]
    if (currentWidth >= widths[key]) return columns[key]
  }

  return columns.default
}

export const Masonry: React.FC<MasonryProps> = ({
  children,
  columns,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [numCols, setNumCols] = useState(3)

  const cols: React.ReactNode[][] = [...Array(numCols)].map(() => [])
  React.Children.forEach(children, (child, i) =>
    cols[i % cols.length].push(child)
  )

  const resizeHandler = () =>
    setNumCols(calculateColumns(ref.current!.offsetWidth, columns))
  useEffect(resizeHandler, [])
  useEventListener('resize', resizeHandler)

  return (
    <Wrapper ref={ref} {...props} columns={numCols}>
      {[...Array(numCols)].map((_, index) => (
        <Column
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {cols[index]}
        </Column>
      ))}
    </Wrapper>
  )
}
