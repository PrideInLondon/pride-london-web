import { NAMES, COMPONENTS } from './index'

// this test is to ensure that the icon names and components map correctly
// technically not a real test, rather an insurance that the maps are
// constructed correctly
it('should validate the names against the components', () => {
  const components = Object.keys(COMPONENTS)
  expect(NAMES).toStrictEqual(components)
})
