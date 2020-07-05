import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from './Modal'

storiesOf('Modal', module).add('with image', () => {
  return (
    <Modal trigger={<button>Click to open</button>}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
        cupiditate, explicabo deserunt aut, tempora odio dolorum quam eos vero
        modi quisquam quod neque fuga quo deleniti rem voluptatem, optio quos.
      </p>
    </Modal>
  )
})
