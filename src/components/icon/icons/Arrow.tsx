import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Arrow = ({ colors: { primary }, ...props }: InternalIconProps) => (
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
        d="M22.586 14.707l-6.293-6.293L17.707 7l8 8 .707.707-.707.707-8 8L16.293 23l6.293-6.293H5v-2h17.586z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="prefix__filter0_d"
        width="21.414"
        height="19.414"
        x="5"
        y="7"
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

export default Arrow
