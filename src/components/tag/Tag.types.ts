import { WrapperProps } from '../wrapper/Wrapper.types'

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<WrapperProps, 'color'> {
  color: string
  variant?: 'primary' | 'outline'
}
