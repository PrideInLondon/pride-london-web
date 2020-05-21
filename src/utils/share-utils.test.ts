import { generateShareUrl } from './share-utils'

describe('generateShareUrl', () => {
  beforeAll(() => {
    process.env.GATSBY_FACEBOOK_APP_ID = '123'
  })

  afterAll(() => {
    delete process.env.GATSBY_FACEBOOK_APP_ID
  })

  it.each`
    platform       | content                                                 | expected
    ${'email'}     | ${{ title: 'foo', body: 'bar' }}                        | ${'mailto:?subject=foo&body=bar'}
    ${'facebook'}  | ${{ url: 'http://foo.com' }}                            | ${'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ffoo.com&app_id=123'}
    ${'linked-in'} | ${{ title: 'foo', body: 'bar', url: 'http://baz.com' }} | ${'https://www.linkedin.com/shareArticle?title=foo&summary=bar&url=http%3A%2F%2Fbaz.com&source=prideinlondon.org'}
    ${'messenger'} | ${{ url: 'http://foo.com' }}                            | ${'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ffoo.com&app_id=123'}
    ${'twitter'}   | ${{ body: 'foo' }}                                      | ${'https://twitter.com/intent/tweet?text=foo'}
  `(
    'should generate share url for platform $platform',
    ({ platform, content, expected }) => {
      const actual = generateShareUrl(platform, content)
      expect(actual).toEqual(expected)
    }
  )
})
