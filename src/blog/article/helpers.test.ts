import { generateBlogArticleSlug } from './helpers'

describe('generateBlogArticleSlug', () => {
  it('should generate a blog article slug when given the title of the blog article', () => {
    const actual = generateBlogArticleSlug('Foo Bar: Baz')
    expect(actual).toEqual('/blog/foo-bar-baz/')
  })
})
