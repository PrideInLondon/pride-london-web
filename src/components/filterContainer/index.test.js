import { calculateIsSelected } from '.'

describe('calculateIsSelected', () => {
  describe('checkbox', () => {
    it('returns true if filter is selected', () => {
      const isSelected = calculateIsSelected('checkbox', 'bar', [
        'foo',
        'bar',
        'baz',
      ])
      expect(isSelected).toBeTruthy()
    })

    it('returns false if filter is not selected', () => {
      const isSelected = calculateIsSelected('checkbox', 'bar', ['foo', 'baz'])
      expect(isSelected).toBeFalsy()
    })
  })

  describe('radio', () => {
    it('returns true if filter is selected', () => {
      const isSelected = calculateIsSelected('radio', 'bar', 'bar')
      expect(isSelected).toBeTruthy()
    })

    it('returns false if filter is not selected', () => {
      const isSelected = calculateIsSelected('radio', 'bar', 'foo')
      expect(isSelected).toBeFalsy()
    })
  })
})
