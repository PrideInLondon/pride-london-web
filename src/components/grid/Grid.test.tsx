import React from 'react'
import { render } from '@testing-library/react'
import { AnimatedFlexColumn } from './index'

describe('The FlexColumn component', () => {
  const { getAllByText } = render(
    <AnimatedFlexColumn animation={false}>
      <p>Testing</p>
    </AnimatedFlexColumn>
  )

  it('render', () => {
    expect(getAllByText('Testing')).toBeTruthy()
  })
})
