import React from 'react'
import Rip1 from './Rip1'
import Rip2 from './Rip2'
import Rip3 from './Rip3'
import Rip4 from './Rip4'
import Rip5 from './Rip5'

interface TearProps {
  ripType: number | undefined
  color: string | undefined
  variant: string
  height: number | undefined
  marginTop?: number | undefined
}

const Tear: React.FC<TearProps> = ({
  ripType,
  variant,
  color = '#fff',
  ...props
}) => {
  switch (ripType) {
    case 1:
      return <Rip1 variant={variant} color={color} {...props} />

    case 2:
      return <Rip2 variant={variant} color={color} {...props} />

    case 3:
      return <Rip3 variant={variant} color={color} {...props} />

    case 4:
      return <Rip4 variant={variant} color={color} {...props} />

    case 5:
      return <Rip5 variant={variant} color={color} {...props} />

    default:
      return null
  }
}

export default Tear
