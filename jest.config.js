// module.exports = {
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
//   },
//   moduleNameMapper: {
//     '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
//   },
// }

const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    verbose: true,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)