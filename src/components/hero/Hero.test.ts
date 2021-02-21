import { getColor } from './Hero'
import { HERO_COLORS } from './Hero.types'

describe('getVariant', () => {
  it.each(HERO_COLORS.map(c => [c]))(
    'should return correct component for color %p',
    color => {
      const actual = getColor(color)
      expect(actual).toEqual(`${color}.jpg`)
    }
  )

  it('should return a random color when given no color', () => {
    const actual = getColor()
    expect(actual).toEqual(
      expect.stringMatching(`^(${HERO_COLORS.join('|')}).jpg$`)
    )
  })
})
