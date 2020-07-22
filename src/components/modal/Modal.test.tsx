import React from 'react'
import { axe } from 'jest-axe'
import {
  cleanup,
  fireEvent,
  render,
  waitForElementToBeRemoved,
  wait,
} from '../../utils/testing-utils'

import { Modal } from './Modal'

beforeEach(() => ((global as any).window.scroll = jest.fn()))

afterEach(() => (global as any).window.scroll.mockReset())

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora debitis placeat quos veritatis et ea voluptas, molestiae, alias, quia laborum eveniet explicabo provident ullam autem ipsum. Alias doloribus nesciunt minima?'

it('it should have no accessibility violations', async () => {
  const { container } = render(
    <Modal open>
      <p>{lorem}</p>
    </Modal>
  )
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('It should close the modal if you press on the outside of it', async () => {
  const { getByTestId, queryByTestId } = render(
    <Modal open>
      <p>{lorem}</p>
    </Modal>
  )

  fireEvent.click(getByTestId('modal-background'))

  await waitForElementToBeRemoved(() => getByTestId('modal-wrapper')).then(
    () => {
      expect(queryByTestId('modal-wrapper')).toBeFalsy()
    }
  )
})

it('The modal should opened/closed if the prop is true/false respectively', () => {
  const { queryByTestId, rerender } = render(
    <Modal open>
      <p>{lorem}</p>
    </Modal>
  )

  expect(queryByTestId('modal-wrapper')).toBeTruthy()
  cleanup()
  rerender(
    <Modal open={false}>
      <p>{lorem}</p>
    </Modal>
  )

  expect(queryByTestId('modal-wrapper')).toBeFalsy()
})

it('It should render JSX between the opening and closing tags inside the modal', () => {
  const { getByText } = render(
    <Modal open>
      <p>{lorem}</p>
    </Modal>
  )

  expect(getByText(lorem)).toBeTruthy()
})

it('It should close the modal with the ESC Key', async () => {
  const { getByTestId, queryByTestId } = render(
    <Modal open>
      <p>{lorem}</p>
    </Modal>
  )

  fireEvent.keyDown(getByTestId('modal-card'), { key: 'Escape', keyCode: 27 })
  await waitForElementToBeRemoved(() => getByTestId('modal-card')).then(() => {
    expect(queryByTestId('modal-card')).toBeFalsy()
  })
})

it('should not be dismissable if dismissable is false', async () => {
  const { getByTestId } = render(
    <Modal open dismissable={false}>
      <p>{lorem}</p>
    </Modal>
  )

  fireEvent.keyDown(getByTestId('modal-card'), { key: 'Escape', keyCode: 27 })
  await wait(() => getByTestId('modal-card')).then(() => {
    expect(getByTestId('modal-card')).toBeTruthy()
  })

  fireEvent.click(getByTestId('modal-background'))

  await wait(() => getByTestId('modal-card')).then(() => {
    expect(getByTestId('modal-card')).toBeTruthy()
  })
})
