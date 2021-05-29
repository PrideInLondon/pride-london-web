import React from 'react'
import { Icon } from '../icon'
import { space } from '../../theme/space'
import { Button } from './PlayButton.styles'
import { PlayButtonProps } from './PlayButton.types'

const ICON_SIZE = { default: space.xl_mob, md: space.xxl }

export const PlayButton: React.FC<PlayButtonProps> = (props) => (
  <Button
    padding={{ default: 'lg', md: 'xl_mob' }}
    border="none"
    backgroundColor="indigo"
    {...props}
  >
    <Icon name="play" variant="white" height={ICON_SIZE} width={ICON_SIZE} />
  </Button>
)
