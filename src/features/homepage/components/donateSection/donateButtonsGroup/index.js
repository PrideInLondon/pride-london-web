import React from 'react'
import Button from '../../../../../components/button'
import { ButtonsContainer, ButtonsGroup, ButtonSingle } from './styles'

const DonateButtonsGroup = () => (
  <ButtonsContainer>
    <ButtonsGroup>
      <Button
        link
        to="https://donate.prideinlondon.org/?amount=5"
        flexwidth
        primary
      >
        {' '}
        £5{' '}
      </Button>
      <Button
        link
        to="https://donate.prideinlondon.org/?amount=10"
        flexwidth
        primary
      >
        {' '}
        £10{' '}
      </Button>
      <Button
        link
        to="https://donate.prideinlondon.org/?amount=20"
        flexwidth
        primary
      >
        {' '}
        £20{' '}
      </Button>
    </ButtonsGroup>
    <span> OR </span>
    <ButtonSingle>
      <Button link to="https://donate.prideinlondon.org" small fullmobile>
        Choose your own amount{' '}
      </Button>
    </ButtonSingle>
  </ButtonsContainer>
)

export default DonateButtonsGroup
