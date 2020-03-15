import React from 'react'
import { Button } from '../components/button'
import {
  ButtonsContainer,
  ButtonsGroup,
  ButtonSingle,
} from './DonateButtonsGroup.styles'

const DonateButtonsGroup = () => (
  <ButtonsContainer>
    <ButtonsGroup>
      <Button to="https://donate.prideinlondon.org/?amount=5"> £5 </Button>
      <Button to="https://donate.prideinlondon.org/?amount=10"> £10 </Button>
      <Button to="https://donate.prideinlondon.org/?amount=20"> £20 </Button>
    </ButtonsGroup>
    <span> OR </span>
    <ButtonSingle>
      <Button
        to="https://donate.prideinlondon.org"
        width={{ default: '100%', md: 'auto' }}
      >
        Choose your own amount
      </Button>
    </ButtonSingle>
  </ButtonsContainer>
)

export default DonateButtonsGroup
