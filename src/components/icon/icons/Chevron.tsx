import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Chevron = ({ colors: { primary }, ...props }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g filter="url(#prefix__filter0_d)">
      <path
        fill={primary}
        fillRule="evenodd"
        d="M3.293 10.707l1.414-1.414L16 20.586 27.293 9.293l1.414 1.414L16 23.414 3.293 10.707z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        width="25.414"
        height="16.121"
        x="3.293"
        y="9.293"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feColorMatrix values="0 0 0 0 0.172549 0 0 0 0 0.854902 0 0 0 0 0.615686 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

export default Chevron
