module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: ["<rootDir>/src/config/setupTests.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy",
    },
    resolver: '<rootDir>/resolver.js',
};