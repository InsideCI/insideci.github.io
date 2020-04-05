module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
  modulePaths: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
