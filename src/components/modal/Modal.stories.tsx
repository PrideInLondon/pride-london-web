import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { H3, P } from '../typography/Typography'
import { Button } from '../button/Button'
import { Wrapper } from '../wrapper/Wrapper'
import { Modal } from './Modal'

export default {
  title: 'Modal',
}

export const Default = () => (
  <Modal
    trigger={<Button>Click to open</Button>}
    dismissable={boolean('dismissable', false)}
  >
    {({ setIsOpen }) => (
      <Wrapper textAlign="center" maxWidth="600px" margin="0 auto">
        <H3 color="white">Lorem ipsum</H3>
        <P color="white" variant="lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          cupiditate, explicabo deserunt aut, tempora odio dolorum quam eos vero
          modi quisquam quod neque fuga quo deleniti rem voluptatem, optio quos.
        </P>
        <Button mr="lg" onClick={() => setIsOpen(false)}>
          Lorem ipsum
        </Button>
        <Button variant="outline-white" onClick={() => setIsOpen(false)}>
          Dolor sit
        </Button>
        <P variant="sm" color="white" mt="lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </P>
      </Wrapper>
    )}
  </Modal>
)

Default.story = {
  name: 'default',
}

export const SetToOpenOnMount = () => (
  <Modal
    trigger={<Button>Click to open</Button>}
    dismissable={boolean('dismissable', false)}
    open
  >
    {({ setIsOpen }) => (
      <Wrapper textAlign="center" maxWidth="600px" margin="0 auto">
        <H3 color="white">Lorem ipsum</H3>
        <P color="white" variant="lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          cupiditate, explicabo deserunt aut, tempora odio dolorum quam eos vero
          modi quisquam quod neque fuga quo deleniti rem voluptatem, optio quos.
        </P>
        <Button mr="lg" onClick={() => setIsOpen(false)}>
          Lorem ipsum
        </Button>
        <Button variant="outline-white" onClick={() => setIsOpen(false)}>
          Dolor sit
        </Button>
        <P variant="sm" color="white" mt="lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </P>
      </Wrapper>
    )}
  </Modal>
)

SetToOpenOnMount.story = {
  name: 'set to open on mount',
}
