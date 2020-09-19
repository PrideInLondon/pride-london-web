import { GridProps } from 'styled-system'

export interface MasonryProps extends GridProps {
  columns: { [key: string]: number }
}
