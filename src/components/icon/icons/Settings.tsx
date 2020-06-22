import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Settings = ({
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
      d="M12.825 4.977c0-.538.44-.977.978-.977h4.394c.538 0 .977.44.977.977V7.22l.972.333 1.76-1.76c.388-.388.983-.388 1.372 0l2.93 2.93c.388.39.388.984 0 1.372l-1.76 1.76.333.972h2.242c.538 0 .977.439.977.977v4.394c0 .538-.44.977-.977.977H24.78l-.333.972 1.76 1.76c.388.388.388.983 0 1.372l-2.93 2.93c-.39.388-.984.388-1.372 0l-1.76-1.76-.972.333v2.242c0 .538-.439.977-.977.977h-4.394c-.538 0-.978-.44-.978-.977V24.78l-.971-.333-1.76 1.76c-.388.388-.983.388-1.371 0l-2.93-2.93c-.389-.39-.389-.984 0-1.372l1.76-1.76-.334-.972H4.977c-.538 0-.977-.439-.977-.977v-4.394c0-.538.44-.978.977-.978H7.22l.333-.971-1.76-1.76c-.388-.388-.388-.983 0-1.372l2.93-2.93c.39-.388.984-.388 1.372 0l1.76 1.76.972-.333V4.977zm1.918 1.014v1.953c0 .45-.302.786-.671.925l-.009.003-2.207.735c-.339.097-.725.003-.973-.245L9.372 7.85 7.814 9.408l1.504 1.505c.31.265.342.668.253.98l-.003.01-.736 2.205c-.138.37-.474.672-.925.672H5.955v2.44h1.952c.45 0 .786.302.925.672l.003.008.736 2.207c.097.34.002.725-.246.973l-1.511 1.512 1.558 1.558 1.504-1.505c.266-.31.668-.341.98-.252l.01.003 2.206.735c.37.139.671.475.671.925v1.953h2.44v-1.953c0-.45.302-.786.672-.925l.008-.003 2.208-.735c.338-.097.724-.003.973.245l1.511 1.511 1.558-1.557-1.504-1.505c-.31-.265-.342-.668-.253-.98l.003-.01.736-2.206c.138-.369.474-.671.925-.671h1.952v-2.44H24.02c-.45 0-.787-.302-.925-.671l-.003-.009-.736-2.207c-.097-.34-.003-.725.246-.973l1.51-1.512-1.557-1.558-1.504 1.505c-.266.31-.669.341-.98.252l-.01-.003-2.206-.735c-.37-.139-.672-.475-.672-.925V5.99h-2.44zM22 16c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z"
      clipRule="evenodd"
    />
    <path
      fill={secondary}
      d="M16 20c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"
    />
  </svg>
)

export default Settings
