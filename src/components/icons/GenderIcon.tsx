import React, { SVGProps } from 'react'
import { colors } from '../../theme/colors'
import { IconProps } from './Icon.types'

const GenderIcon = ({ variant, ...props }: IconProps) => {
  const pathProps: SVGProps<SVGPathElement> = {
    stroke: { blue: colors.indigo, white: colors.white }[variant],
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.896 5.448C10.896 8.457 8.457 10.896 5.448 10.896C2.439 10.896 0 8.457 0 5.448C0 2.439 2.439 0 5.448 0C8.457 0 10.896 2.439 10.896 5.448"
        transform="translate(5.875 5.765)"
        fill={colors.eucalyptusGreen}
      />
      <path
        clipRule="evenodd"
        d="M10.896 5.448C10.896 8.457 8.457 10.896 5.448 10.896C2.439 10.896 0 8.457 0 5.448C0 2.439 2.439 0 5.448 0C8.457 0 10.896 2.439 10.896 5.448Z"
        transform="translate(5.875 5.765)"
        {...pathProps}
      />
      <path
        d="M0 0L5.185 5.185"
        transform="translate(1.985 1.985)"
        {...pathProps}
      />
      <path
        d="M0 4.055L0.059 0.29L4.056 0"
        transform="translate(1 1)"
        {...pathProps}
      />
      <path
        d="M0 3.681L3.681 0"
        transform="translate(3.068 3.068)"
        {...pathProps}
      />
      <path
        d="M5.185 0L0 5.185"
        transform="translate(15.26 1.985)"
        {...pathProps}
      />
      <path
        d="M0 0L3.766 0.058L4.056 4.055"
        transform="translate(17.374 1)"
        {...pathProps}
      />
      <path
        d="M0 0V7.031"
        transform="translate(11.323 16.661)"
        {...pathProps}
      />
      <path d="M0 0H4.425" transform="translate(9.055 20.91)" {...pathProps} />
    </svg>
  )
}

export default GenderIcon
