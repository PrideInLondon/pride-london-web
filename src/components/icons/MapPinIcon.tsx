import React, { SVGProps } from 'react'
import { colors } from '../../theme/colors'
import { IconProps } from './Icon.types'

const MapPinIcon = ({ variant, ...props }: IconProps) => {
  const pathProps: SVGProps<SVGPathElement> = {
    stroke: { blue: colors.indigo, white: colors.white }[variant],
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  return (
    <svg
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M15.9293 8.10686C15.9293 3.62914 12.3638 0 7.96463 0C3.56547 0 0 3.62914 0 8.10686C0 9.38743 0.299789 10.5943 0.820211 11.6717H0.811789L7.96463 24L15.1032 11.7026H15.0947C15.6236 10.6183 15.9293 9.40029 15.9293 8.10686Z"
        transform="translate(1 1)"
        {...pathProps}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.15284 3.64029C7.15284 5.65114 5.552 7.28057 3.57642 7.28057C1.60084 7.28057 0 5.65114 0 3.64029C0 1.62943 1.60084 0 3.57642 0C5.552 0 7.15284 1.62943 7.15284 3.64029"
        transform="translate(5.388 5.263)"
        fill="#2CDA9D"
      />
      <path
        clipRule="evenodd"
        d="M7.15284 3.64029C7.15284 5.65114 5.552 7.28057 3.57642 7.28057C1.60084 7.28057 0 5.65114 0 3.64029C0 1.62943 1.60084 0 3.57642 0C5.552 0 7.15284 1.62943 7.15284 3.64029Z"
        transform="translate(5.388 5.263)"
        {...pathProps}
      />
    </svg>
  )
}

export default MapPinIcon
