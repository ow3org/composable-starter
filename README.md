<p align="center"><img src="https://github.com/openwebstacks/composable-starter/blob/main/.github/art/cover_composable_starter.png?raw=true" alt="Social Card of Composable Starter"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# The Easy Way

This is an opinionated Composable Starter Kit to help kick-start development of your next npm package. Whether it's simply one or a library of composables, this starter kit will help you get started quickly.

## 💡 Get Started

Luckily, it's incredibly easy to get your package development started:

```bash
# you may use this GitHub template or the following command:
npx degit openwebstacks/composable-starter dummy-composable
cd dummy-composable

 # if you don't have pnpm installed, run `npm i -g pnpm`
pnpm i # install all deps
pnpm build # builds the library for production-ready use

# how to create a git commit?
git add . # select the changes you want to commit
pnpm run commit # then simply answer the questions

# after you have successfully committed, you may create a "release"
pnpm run release # automates git commits, versioning, and changelog generations
```

### Developer Experience (DX)

This Starter Kit comes pre-configured with the following:

- [Powerful Build Engine](https://github.com/unjs/unbuild) - via unbuild
- [Fully Typed APIs](https://www.typescriptlang.org/) - via TypeScript 4.7
- [Be a Good Commitizen](https://www.npmjs.com/package/git-cz) - pre-configured Commitizen & git-cz setup to simplify semantic git commits, versioning, and changelog generations
- [Test Driven Development](https://github.com/vitest-dev/vitest) - unit-testing powered by [Vitest](https://github.com/vitest-dev/vitest)
- [Renovate](https://renovatebot.com/) - optimized & automated PR dependency updates
- [GitHub Actions](https://github.com/features/actions) - runs your CI (fixes code style issues, tags releases & creates its changelogs, runs the test suite, etc.

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/openwebstacks/composable-starter/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/openwebstacks/composable-starter/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/dummy-composable?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/dummy-composable

[npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/dummy-composable?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/dummy-composable

[github-actions-src]: https://img.shields.io/github/workflow/status/openwebstacks/composable-starter/CI/main?style=flat-square
[github-actions-href]: https://github.com/openwebstacks/composable-starter/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/openwebstacks/composable-starter/main?style=flat-square
[codecov-href]: https://codecov.io/gh/openwebstacks/composable-starter -->
