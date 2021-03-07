module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss).*$': 'identity-obj-proxy'
  }
}
