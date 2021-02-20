module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/.jest/empty-module.js',
  },
  transform: {
    '\\.(jsx?|tsx?)$': 'babel-jest',
    '\\.(jpg|png|svg)$': '<rootDir>/.jest/transformer.ts',
  },
  setupFiles: ['<rootDir>/.jest/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  coverageDirectory: './coverage/',
  globals: {
    __PATH_PREFIX__: '',
  },
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
}
