import React from 'react'
import { render } from '@testing-library/react'
import { CTALink } from './CTALink'

const link = {
  text: 'View all',
  url: '/',
  externalUrl: 'http://google.com',
  contactUrl: 'mailto:test@test.com',
}

describe('CTA Link', () => {
  it('should render a link with an arrow as default', () => {
    const { queryByRole, queryByText } = render(
      <CTALink to={link.url}>{link.text}</CTALink>
    )
    expect(queryByRole('link')).toBeTruthy()
    expect(queryByText(/›/)).toBeTruthy()
  })

  it('should render a link without an arrow if specified', () => {
    const { queryByRole, queryByText } = render(
      <CTALink to={link.url} arrow={false}>
        {link.text}
      </CTALink>
    )
    expect(queryByRole('link')).toBeTruthy()
    expect(queryByText(/›/)).toBeFalsy()
  })
})
