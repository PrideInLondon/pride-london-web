import {
  DEFAULT_LOCALE,
  getAnyForLocale,
  getStringForLocale,
  getImageForLocale,
} from './renderMethods'
import { Image } from './RichText.types'

const NON_DEFAULT_LOCALE = 'en-US'

const generateTestData = (valueForDefault: any, valueForNonDefault: any) => ({
  [DEFAULT_LOCALE]: valueForDefault,
  [NON_DEFAULT_LOCALE]: valueForNonDefault,
})

describe('getAnyForLocale', () => {
  it.each`
    val
    ${3}
    ${{ foo: 'bar' }}
  `('should get any ($val) for given locale', ({ val }) => {
    const input = generateTestData(null, val)
    const actual = getAnyForLocale(input, NON_DEFAULT_LOCALE)
    expect(actual).toEqual(val)
  })

  it('should use default locale when not given', () => {
    const val = { foo: 'bar' }
    const input = generateTestData(val, null)
    const actual = getAnyForLocale(input)
    expect(actual).toEqual(val)
  })
})

describe('getStringForLocale', () => {
  it.each`
    val
    ${'foo'}
    ${' foo '}
  `('should get string ($val) for given locale', ({ val }) => {
    const input = generateTestData('', val)
    const actual = getStringForLocale(input, NON_DEFAULT_LOCALE)
    expect(actual).toEqual('foo')
  })

  it('should use default locale when not given', () => {
    const val = 'foo'
    const input = generateTestData(val, '')
    const actual = getStringForLocale(input)
    expect(actual).toEqual(val)
  })
})

describe('getImageForLocale', () => {
  const EXPECTED = { src: 'foo', alt: 'bar' }

  const generateTestImage = (locale: string): Image => ({
    fields: {
      image: {
        [locale]: {
          fields: {
            file: {
              [locale]: {
                url: 'foo',
              },
            },
          },
        },
      },
      altText: { [locale]: 'bar' },
    },
  })

  it('should get image for given locale', () => {
    const image = generateTestImage(NON_DEFAULT_LOCALE)
    const actual = getImageForLocale(image, NON_DEFAULT_LOCALE)
    expect(actual).toEqual(EXPECTED)
  })

  it('should use default locale when not given', () => {
    const image = generateTestImage(DEFAULT_LOCALE)
    const actual = getImageForLocale(image)
    expect(actual).toEqual(EXPECTED)
  })
})
