# Contributing

Contributions are more than welcome - here are some instructions on how to get started.

## Development

Install dependencies
```bash
yarn install
```

Run with hot reload
```bash
yarn dev
```

Run all continuous integration checks (linter, Flow checker, tests):
```bash
yarn ci
```

Build for production

```bash
yarn build
```

Build from OSX to linux
```bash
docker run --rm -ti   --env-file <(env | grep -iE 'DEBUG|NODE_|ELECTRON_|YARN_|NPM_|CI|CIRCLE|TRAVIS|APPVEYOR_|CSC_|GH_|GITHUB_|BT_|AWS_|STRIP|BUILD_')   --env ELECTRON_CACHE="/root/.cache/electron"   --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder"   -v ${PWD}:/project   -v ${PWD##*/}-node-modules:/project/node_modules   -v ~/.cache/electron:/root/.cache/electron   -v ~/.cache/electron-builder:/root/.cache/electron-builder   electronuserland/builder:wine
yarn && yarn build
```

## Maintenance

To update dependencies:

```bash
yarn upgrade
```

This will update packages according to version constrains in *package.json*.
To update version constraints, edit version constrain in *package.json* and then upgrade yarn:

```bash
vim package.json
yarn upgrade
```

To update Flow type signatures of dependencies, run:

```bash
yarn flow-typed install
```

## Testing

To run all tests:
```bash
yarn unit
```

If you want to run selected tests multiple times, you can start `karma` server in background:

```bash
yarn unit:start-server
yarn unit:run --grep="loading screen"
```

To check test coverage, run:

```bash
TEST_COVERAGE=true yarn unit
```

HTML report can be found in *test/unit/coverage/lcov-report/index.html*.

## Feature toggle

We have a built-in feature toggling tool, which we use to enable/disable features for specific tester groups and/or environments.

The main file is `features.prod.json` which is used in CI builds and should be committed into the repository.
If you want a customized build, you can create your own `features.json` file and change the values appropriately, but it shouldn't be committed into the repository.

## Conventions

We are using [StandardJS](https://standardjs.com/) style.
These rules are already checked by CI (`yarn ci`).

In addition to that, we have following conventions:
- We are using `file-name.js` convention for filenames
- All new code should we written in [Flow](https://flow.org/)
