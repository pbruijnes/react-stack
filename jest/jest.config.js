module.exports = {
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    testMatch: ['**/*.spec.ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    moduleNameMapper: {
        '^@frontend-redux(.*)$': '<rootDir>/frontend-redux/src$1',
        '^@frontend-graphql(.*)$': '<rootDir>/frontend-graphql/src$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest/file-mock.js',
        '\\.(css|scss)$': '<rootDir>/jest/style-mock.js',
    },
    moduleDirectories: ['node_modules', '../node_modules'],
    automock: false,
    setupFiles: ['<rootDir>/jest/jest.setup.js'],
    rootDir: '../',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
}
