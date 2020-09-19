import Link from 'gatsby-link'
import {
  isExternalUrl,
  isContactUrl,
  handleSlug,
  handleUrl,
  fetchTypeformId,
} from './location-utils'

describe('isExternalUrl', () => {
  it.each`
    url                  | expected
    ${'http://foo.com'}  | ${true}
    ${'https://foo.com'} | ${true}
    ${'ftp://foo.com'}   | ${true}
    ${'/foo'}            | ${false}
  `('should return $expected when given url $url', ({ url, expected }) => {
    const actual = isExternalUrl(url)
    expect(actual).toEqual(expected)
  })
})

describe('isContactUrl', () => {
  it.each`
    url                  | expected
    ${'mailto:foo.com'}  | ${true}
    ${'tel:123'}         | ${true}
    ${'https://foo.com'} | ${false}
  `('should return $expected when given url $url', ({ url, expected }) => {
    const actual = isContactUrl(url)
    expect(actual).toEqual(expected)
  })
})

describe('handleSlug', () => {
  it.each`
    slug
    ${'/foo'}
    ${'foo'}
  `('should return /foo when given slug $slug', ({ slug }) => {
    const actual = handleSlug(slug)
    expect(actual).toEqual('/foo')
  })
})

describe('handleUrl', () => {
  it.each`
    url                  | expected
    ${'/foo'}            | ${{ to: '/foo', as: Link }}
    ${'https://foo.com'} | ${{ href: 'https://foo.com', rel: 'noopener noreferrer', target: '_blank', as: 'a' }}
    ${'mailto:foo.com'}  | ${{ href: 'mailto:foo.com', target: '_blank', as: 'a' }}
  `('should return $expected when given url $url', ({ url, expected }) => {
    const actual = handleUrl(url)
    expect(actual).toEqual(expected)
  })
})

describe('fetchTypeformId', () => {
  it.each`
    to                                             | expected
    ${'https://typeform.com/to/ABC'}               | ${'ABC'}
    ${'https://prideinlondon.typeform.com/to/ABC'} | ${'ABC'}
    ${'/events'}                                   | ${null}
  `('should return $expected when given $to', ({ to, expected }) => {
    const actual = fetchTypeformId(to)
    expect(actual).toEqual(expected)
  })
})
