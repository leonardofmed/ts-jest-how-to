# ts-jest-how-to
Playground to jest testing with a simple Vite + Typescript project. The default vite project is a clickable counter and the main objective is to add some tests to the counter function. Other functions will be created to further test the jest capabilities, these will follow the guide from [Geshan Manandhar¹](https://github.com/leonardofmed/ts-jest-how-to#references) and will focus on mocking classes and methods for testing purposes.

## How to use
- Clone repo;
- Install dependencies: `npm i`;
- Run tests `npm test`.

## Why mock some dependencies
To test a piece of code swiftly and have consistent reliable results all the other dependencies have to be replaced with mocks controlled by the software engineer writing the tests. For example, if you are testing a function that relies on a file in the file system or makes an HTTP call over the network these external resources must be replaced with mocks for the tests to be a unit test. Relying on any external resource can make the test results flaky and hence unreliable.

Any external resource or even code outside the system under test should be mocked out. Replacing any external resource like network calls or file system access not only makes the unit test blazing fast but also removes any chance of the test failing due to external factors out of your control.¹

## [¹Multiple Mocks Methods](https://github.com/leonardofmed/ts-jest-how-to#references)
There are multiple ways to mock an ES6 class in Jest. To keep things simple and consistent we will use the module factory parameters method and jest SpyOn to mock a specific method of a class. These two methods are not only flexible but also maintainable down the line.

Both methods give the flexibility to change these mocks for each test. We will replace the whole object with the module factory pattern. It is used if we want to mock most or all of the methods in the class. If there are one or two methods to mock for the unit test, the spy method will be better suited.

## How this project was created
- Init vite: `npm create vite@latest` using vanilla template and Typescript option;
- Install `jest` and `@types/jest`. To use with TS also install `ts-jest`.
- Added babel support *(not sure if needed)* with: `npm i babel-jest @babel/core @babel/preset-env`. Created a file `babel.config.cjs` in root with the following options:
```
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]
};
```
- Added `jest.config.js` to root with the following options:
```
module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/test"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```
- Installed `jest-environment-jsdom` and added the following option in `jest.config.js` so we can mock HTML elements: `"testEnvironment": 'jsdom'`
- Build: `npm run build`.

## Arrange-Act-Assert pattern²
Arrange-Act-Assert is a great way to structure test cases. It prescribes an order of operations:

1. Arrange inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.
2. Act on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
3. Assert expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.

## References
- [Getting started](https://jestjs.io/docs/getting-started)
- [How to set Jest in Typescript](https://basarat.gitbook.io/typescript/intro-1/jest)
- [¹Mocking and the difference between dependency injection](https://meticulous.ai/blog/mocking-a-javascript-class-with-jest-two-ways-to-make-it-easier/)
- [²Arrange-Act-Assert: A Pattern for Writing Good Tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
- [Frontend Unit Testing Best Practices](https://meticulous.ai/blog/frontend-unit-testing-best-practices/)