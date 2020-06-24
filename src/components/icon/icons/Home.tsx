import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Home = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={primary}
      fillRule="evenodd"
      d="M7 14.499h2V26h14V14.734h2V28H7V14.499z"
      clipRule="evenodd"
    />
    <path fill={secondary} d="M12 28h8V18h-8v10z" />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M20 28h-8V18h8v10zm-2-8h-4v6h4v-6z"
      clipRule="evenodd"
    />
    <path fill={secondary} d="M27 12L16 4 5 12l3 5 8-6 8 6 3-5z" />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M16 8.5l7.426 5.57.917-1.53L16 6.474l-8.343 6.068.917 1.528L16 8.5zm0 2.5l8 6 3-5-11-8-11 8 3 5 8-6z"
      clipRule="evenodd"
    />
  </svg>
)

export default Home
