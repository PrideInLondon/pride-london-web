import '@testing-library/jest-dom'
import 'jest-styled-components'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

export interface CustomNodeJsGlobal extends NodeJS.Global {
  window: Window & { ResizeObserver: any; ___navigate: any }
  ___loader: { enqueue: jest.Mock }
}

// Tell Typescript to use this type for the already existent global `global` variable.
export declare const global: CustomNodeJsGlobal

beforeAll(() => {
  global.window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  }))
  global.___loader = {
    enqueue: jest.fn(),
  }
  global.window.___navigate = jest.fn()
})

afterAll(() => {
  global.window.ResizeObserver.mockReset()
  global.window.___navigate.mockReset()
  global.___loader.enqueue.mockReset()
})
