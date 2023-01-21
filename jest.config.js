module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testResultsProcessor: 'jest-sonar-reporter',
    moduleFileExtensions: ['ts', 'js', 'json'],
    testRegex: '^.+\\.spec\\.ts$',
};
