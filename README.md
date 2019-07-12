# Mulit-use Application V2

A second - hopefully better - version of the App, using `TypeScript`.

This project uses [Electron React Builerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) as a starter, usind the `typescript` variant as I don't like `flow`.

This project also gets inspiration from a [Creative Tim](https://www.creative-tim.com) [template](https://www.creative-tim.com/product/light-bootstrap-dashboard-react).

I may also use some things from the [React-Admin](https://github.com/marmelab/react-admin) project in the future.

## Roadmap

1. ~Create main window~
2. Create sidebar
3. Create a way to switch projects, which will change what's in the sidebar and the main window.
4. Wire sidebar links to switch out the `view` in the main container
5. ....

## Notes about this build

### File load order

- `app/index.js` => the main entry to the app. _NOTE_ Global styles are loaded here
- `app/Routes.js` => loads the router for the app. Each route takes a `path` and a `component` prop. These are passed to `app/containers/App.js` and handled as child fragment elements.
- `app/containers/Root.js` => Seems to handle `store` and `history`
- `app/container/App.js` => This seems to be the body of the ap
- `app/component/<NAME_FROM_Route.js>` => whichever component was passed as a prop in `Routes.js` is rendered here.

# Electron React Builerplate Docs

<hr />

<br />

<div align="center">

[![Build Status][travis-image]][travis-url]
[![Appveyor Build Status][appveyor-image]][appveyor-url]
[![Dependency Status][david-image]][david-url]
[![DevDependency Status][david-dev-image]][david-dev-url]
[![Github Tag][github-tag-image]][github-tag-url]

[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/electron-react-blpt)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/electron-react-boilerplate/sponsors/badge.svg)](#sponsors)
[![Good first issues open][good-first-issue-image]][good-first-issue-url]
[![StackOverflow](http://img.shields.io/badge/stackoverflow-electron_react_boilerplate-blue.svg)](http://stackoverflow.com/questions/tagged/electron-react-boilerplate)

</div>

<div align="center">

![Electron Boilerplate Demo](https://cloud.githubusercontent.com/assets/3382565/10557547/b1f07a4e-74e3-11e5-8d27-79ab6947d429.gif)

</div>

## Install

- **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)

[npm-image]: https://img.shields.io/npm/v/electron-react-boilerplate.svg?style=flat-square
[github-tag-image]: https://img.shields.io/github/tag/electron-react-boilerplate/electron-react-boilerplate.svg?label=version
[github-tag-url]: https://github.com/electron-react-boilerplate/electron-react-boilerplate/releases/latest
[travis-image]: https://travis-ci.com/electron-react-boilerplate/electron-react-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.com/electron-react-boilerplate/electron-react-boilerplate
[appveyor-image]: https://ci.appveyor.com/api/projects/status/4m972s6e4nf52hx6/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/electron-react-boilerplate/electron-react-boilerplate/branch/master
[david-image]: https://img.shields.io/david/electron-react-boilerplate/electron-react-boilerplate.svg
[david-url]: https://david-dm.org/electron-react-boilerplate/electron-react-boilerplate
[david-dev-image]: https://img.shields.io/david/dev/electron-react-boilerplate/electron-react-boilerplate.svg?label=devDependencies
[david-dev-url]: https://david-dm.org/electron-react-boilerplate/electron-react-boilerplate?type=dev
[good-first-issue-image]: https://img.shields.io/github/issues/electron-react-boilerplate/electron-react-boilerplate/good%20first%20issue.svg?label=good%20first%20issues
[good-first-issue-url]: https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3A"good+first+issue"
