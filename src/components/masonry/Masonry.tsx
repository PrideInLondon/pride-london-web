import React, { useEffect, useRef, useState } from 'react'
import { useEventListener } from '../../hooks/useEventListener'
import { Wrapper, Column } from './Masonry.styles'
import { MasonryProps } from './Masonry.types'

export const Masonry: React.FC<MasonryProps> = ({
  children,
  minColumnWidth,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [numCols, setNumCols] = useState(3)

  const cols: React.ReactNode[][] = [...Array(numCols)].map(() => [])
  React.Children.forEach(children, (child, i) =>
    cols[i % cols.length].push(child)
  )

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current!.offsetWidth / minColumnWidth))
  useEffect(resizeHandler, [])
  useEventListener('resize', resizeHandler)

  return (
    <Wrapper ref={ref} {...props}>
      {[...Array(numCols)].map((_, index) => {
        return (
          <Column
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {cols[index]}
          </Column>
        )
      })}
    </Wrapper>
  )
}
