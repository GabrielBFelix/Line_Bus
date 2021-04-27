/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ["src/**/*.js"],
  mutator: 'javascript',
  testRunner: 'jest',
  reporter: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'perTest',
};
