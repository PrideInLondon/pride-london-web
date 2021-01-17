import React from 'react'
import { Icon } from '../icon'
import { space } from '../../theme/space'
import { Button } from './PlayButton.styles'
import { PlayButtonProps } from './PlayButton.types'

export const PlayButton: React.FC<PlayButtonProps> = props => (
  <Button padding={{ default: 'lg', md: 'xl_mob' }} border="none" {...props}>
    <Icon
      name="play"
      variant="white"
      height={{ default: space.xl_mob, md: space.xxl }}
      width={{ default: space.xl_mob, md: space.xxl }}
    />
  </Button>
)
