import React from 'react'
import styled from 'styled-components'
import { variant, space } from 'styled-system'
import tinycolor from 'tinycolor2'
import { Wrapper } from '../wrapper'
import { sm } from '../../theme/space'
import { colors } from '../../theme/colors'
import { TagProps } from './Tag.types'

const getMostReadable = (color: string) =>
  tinycolor
    .mostReadable(color, [colors.white, colors.indigo], {
      level: 'AAA',
      size: 'small',
    })
    .toHexString()

export const TagWrapper = styled((props) => <Wrapper {...props} />)<TagProps>`
  border: 2px solid ${({ color }) => color};
  padding: ${sm}px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;

  ${({ color }) =>
    variant({
      variants: {
        primary: {
          backgroundColor: color,
          color: getMostReadable(color),
        },
        outline: {
          color: colors.indigo,
        },
      },
    })}

  ${space}
`
