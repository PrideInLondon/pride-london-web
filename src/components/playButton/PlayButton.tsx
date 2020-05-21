import React from 'react'
import { PlayButtonProps } from './PlayButton.types'
import { ButtonWrapper } from './PlayButton.styles'

export const PlayButton: React.FC<PlayButtonProps> = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}
