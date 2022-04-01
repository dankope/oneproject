export default {
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleDirectories: ["src", "node_modules"],
    setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
};