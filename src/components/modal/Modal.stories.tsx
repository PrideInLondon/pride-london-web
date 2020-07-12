import React from 'react'
import { storiesOf } from '@storybook/react'
import { H3, P } from '../typography/Typography'
import { Button } from '../button/Button'
import { Wrapper } from '../wrapper/Wrapper'
import { Modal } from './Modal'

storiesOf('Modal', module).add('with image', () => {
  return (
    <Modal
      trigger={<button>Click to open</button>}
      dismissable={false}
      width="100%"
    >
      {({ setIsOpen }) => (
        <Wrapper textAlign="center" maxWidth="600px" margin="0 auto">
          <H3 color="white">Lorem ipsum</H3>
          <P color="white" variant="lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            cupiditate, explicabo deserunt aut, tempora odio dolorum quam eos
            vero modi quisquam quod neque fuga quo deleniti rem voluptatem,
            optio quos.
          </P>
          <Button mr="lg" onClick={() => setIsOpen(false)}>
            Lorem ipsum
          </Button>
          <Button variant="outline-white" onClick={() => setIsOpen(false)}>
            Dolor sit
          </Button>
          <P variant="sm" color="white" mt="lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </P>
        </Wrapper>
      )}
    </Modal>
  )
})
