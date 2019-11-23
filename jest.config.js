module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*(_|.))+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/empty-module.js',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  setupFiles: ['./src/configuration/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
