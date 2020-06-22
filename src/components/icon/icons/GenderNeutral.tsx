import React from 'react'
import { InternalIconProps } from '../Icon.types'

const GenderNeutral = ({
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
      fill={secondary}
      d="M21 15c0 .989-.293 1.956-.843 2.778-.549.822-1.33 1.463-2.244 1.841-.913.379-1.918.478-2.889.285-.97-.193-1.86-.67-2.56-1.369-.699-.699-1.175-1.59-1.368-2.56-.193-.97-.094-1.975.285-2.888.378-.914 1.019-1.695 1.841-2.244.822-.55 1.79-.843 2.778-.843 1.326 0 2.598.527 3.536 1.464C20.473 12.402 21 13.674 21 15z"
    />
    <path
      fill={primary}
      fillRule="evenodd"
      d="M25 6.414V10h2V3h-7v2h3.586L18.86 9.726C17.99 9.254 17.008 9 16 9c-1.002 0-1.985.25-2.86.726L12.414 9l1.293-1.293-1.414-1.414L11 7.586 8.414 5H12V3H5v7h2V6.414L9.586 9l-1.293 1.293 1.414 1.414L11 10.414l.555.556c-.46.508-.833 1.094-1.098 1.734-.454 1.096-.573 2.303-.342 3.467.232 1.163.803 2.233 1.642 3.072.84.839 1.909 1.41 3.072 1.642l.171.031V23h-3v2h3v4h2v-4h3v-2h-3v-2.084c.442-.075.877-.2 1.296-.373 1.096-.454 2.034-1.223 2.693-2.21C21.649 17.347 22 16.187 22 15c0-1.493-.557-2.93-1.555-4.03L25 6.413zm-6.587 5.396l-.025-.019C17.702 11.281 16.865 11 16 11c-.791 0-1.565.235-2.222.674-.057.038-.114.078-.168.119l-.021.015c-.567.429-1.011 1.002-1.284 1.661-.303.731-.383 1.536-.228 2.311.154.776.535 1.489 1.095 2.048.559.56 1.272.94 2.048 1.095.776.155 1.58.075 2.31-.227.732-.303 1.356-.816 1.796-1.474.44-.658.674-1.43.674-2.222 0-1.06-.421-2.078-1.172-2.828-.13-.131-.269-.252-.415-.362z"
      clipRule="evenodd"
    />
  </svg>
)

export default GenderNeutral
