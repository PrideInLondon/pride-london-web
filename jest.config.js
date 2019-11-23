module.exports = {
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/empty-module.js',
  },
  testMatch: ['<rootDir>/src/**/*.test.js'],
  setupFiles: ['<rootDir>/config/setup-enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  globals: {
    __PATH_PREFIX__: '',
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
}
