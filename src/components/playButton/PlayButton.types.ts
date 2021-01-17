import React from 'react'
import { BorderProps, PositionProps, SpaceProps } from 'styled-system'

export interface PlayButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BorderProps,
    PositionProps,
    SpaceProps {}
