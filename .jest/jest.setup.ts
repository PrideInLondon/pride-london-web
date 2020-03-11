import '@testing-library/jest-dom'
import 'jest-styled-components'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

interface CustomNodeJsGlobal extends NodeJS.Global {
  window: Window & { ResizeObserver: any }
  ___loader: { enqueue: jest.Mock }
}

// Tell Typescript to use this type for the already existent global `global` variable.
declare const global: CustomNodeJsGlobal

beforeAll(() => {
  global.window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  }))

  global.___loader = {
    enqueue: jest.fn(),
  }
})

afterAll(() => {
  global.window.ResizeObserver.mockReset()
  global.___loader.enqueue.mockReset()
})
