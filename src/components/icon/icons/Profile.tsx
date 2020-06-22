import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Profile = ({
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
      d="M23.546 22.549C21.634 20.999 18.842 20 16.025 20c-2.841 0-5.673.961-7.599 2.517C6.918 20.766 6 18.492 6 16c0-5.523 4.477-10 10-10s10 4.477 10 10c0 2.507-.93 4.794-2.454 6.549zM16 4C9.373 4 4 9.373 4 16c0 3.063 1.157 5.848 3.045 7.968.486.547 1.02 1.048 1.598 1.498C10.676 27.049 13.224 28 16 28c2.781 0 5.335-.955 7.37-2.543.564-.44 1.084-.929 1.561-1.462C26.833 21.872 28 19.075 28 16c0-6.627-5.372-12-12-12zm5 9c0-2.76-2.239-5-5-5-2.76 0-5 2.24-5 5 0 2.761 2.24 5 5 5 2.761 0 5-2.239 5-5z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      fillRule="evenodd"
      d="M16 26c-2.215 0-4.254-.728-5.911-1.947 1.528-1.148 3.714-2.055 5.91-2.055 2.195 0 4.384.905 5.919 2.051C20.258 25.27 18.217 26 16 26zM16 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
      clipRule="evenodd"
    />
  </svg>
)

export default Profile
