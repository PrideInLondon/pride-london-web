import React from 'react'
import { Icon } from '../icon'
import { space } from '../../theme/space'
import { ButtonWrapper } from './PlayButton.styles'

export const PlayButton: React.FC<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <Icon
        name="play"
        variant="white"
        height={{ default: space.xl_mob, md: space.xxl }}
        width={{ default: space.xl_mob, md: space.xxl }}
      />
    </ButtonWrapper>
  )
}
