import { generateTitle } from './Helmet'

describe('generateTitle', () => {
  it('should render a full title when title includes verticle bar', () => {
    const title = 'blah | Pride in London'
    const actual = generateTitle(title)
    expect(actual).toBe(title)
  })

  it('should add the PiL suffix when title does not include verticle bar', () => {
    const title = 'blah'
    const actual = generateTitle(title)
    expect(actual).toBe('blah | Pride in London')
  })
})
