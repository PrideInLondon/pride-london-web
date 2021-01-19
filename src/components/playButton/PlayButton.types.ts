import React from 'react'
import {
  BorderProps,
  ColorProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'

export interface PlayButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    BorderProps,
    ColorProps,
    PositionProps,
    SpaceProps {}
