import { getValueForLocale } from './renderMethods'

describe('getValueForLocale', () => {
  it.each`
    val
    ${'foo'}
    ${3}
    ${{ foo: 'bar' }}
  `('should get value for given locale', ({ val }) => {
    const actual = getValueForLocale(
      {
        'en-GB': null,
        'en-US': val,
      },
      'en-US'
    )
    expect(actual).toEqual(val)
  })

  it('should use default locale when not provided', () => {
    const actual = getValueForLocale({
      'en-GB': 'foo',
      'en-US': 'bar',
    })
    expect(actual).toEqual('foo')
  })

  it('should trim string when given string with leading/trailing whitespace', () => {
    const actual = getValueForLocale({ 'en-GB': ' foo ' })
    expect(actual).toEqual('foo')
  })
})
