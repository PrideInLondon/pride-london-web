import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import logo from '../../assets/logo.png'
import { Image } from './Image'

describe('Image', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Image src={logo} alt="Test Picture - PiL Logo" caption="Test Caption" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
