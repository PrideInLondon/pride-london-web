import React from 'react'
import { InternalIconProps } from '../Icon.types'

const Twitter = ({ colors: { primary }, ...props }: InternalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill={primary}
      fillRule="evenodd"
      d="M26 6H6v20h20V6zM4 4v24h24V4H4z"
      clipRule="evenodd"
    />
    <path
      fill={primary}
      d="M17.517 11.118c-1.083.397-1.768 1.421-1.69 2.542l.026.433-.434-.053c-1.578-.203-2.957-.892-4.127-2.048l-.572-.574-.148.424c-.312.944-.112 1.942.538 2.613.347.37.269.423-.33.203-.208-.071-.39-.124-.407-.098-.06.062.147.866.312 1.183.225.442.685.874 1.188 1.13l.425.203-.503.01c-.486 0-.503.008-.451.193.173.574.858 1.183 1.621 1.448l.538.185-.468.283c-.694.406-1.509.635-2.324.653-.39.009-.711.044-.711.07 0 .089 1.058.583 1.673.777 1.847.574 4.041.327 5.688-.653 1.17-.697 2.341-2.083 2.888-3.425.295-.715.59-2.021.59-2.648 0-.406.025-.459.51-.944.287-.283.556-.592.608-.68.087-.168.078-.168-.364-.018-.737.265-.841.23-.477-.168.269-.282.59-.794.59-.944 0-.026-.13.018-.278.097-.156.088-.503.22-.763.3l-.468.15-.425-.291c-.234-.159-.564-.335-.737-.388-.442-.124-1.119-.106-1.518.035z"
    />
  </svg>
)

export default Twitter
