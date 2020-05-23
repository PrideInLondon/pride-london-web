import React from 'react'
import { Icon } from '../icon'
import { PlayButtonProps } from './PlayButton.types'
import { ButtonWrapper } from './PlayButton.styles'

export const PlayButton: React.FC<PlayButtonProps> = () => {
  return (
    <ButtonWrapper onClick={() => alert('clicked')}>
      <Icon name="play-icon" variant="white" height="80px" width="80px" />
    </ButtonWrapper>
  )
}
