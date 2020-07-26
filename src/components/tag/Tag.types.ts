import { SpaceProps } from 'styled-system'

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpaceProps {
  color: string
  variant?: 'primary' | 'outline'
}
