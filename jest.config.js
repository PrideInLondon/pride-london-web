module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/empty-module.js',
  },
  setupFiles: ['<rootDir>/config/jest.setup.js', 'core-js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageDirectory: './coverage/',
  globals: {
    __PATH_PREFIX__: '',
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
}
