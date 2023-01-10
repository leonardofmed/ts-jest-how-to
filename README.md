# ts-jest-how-to
Playground to jest testing with a simple Vite + Typescript project. The default project is a clickable counter and the initial objective is to add some tests to the counter function.

## How to use
- Clone repo;
- Install dependencies: `npm i`;
- Run tests `npm test`.

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
- Build: `npm run build`.


## References
- https://basarat.gitbook.io/typescript/intro-1/jest
- https://jestjs.io/docs/getting-started