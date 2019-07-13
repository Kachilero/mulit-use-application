# Mulit-use Application V2

A second - hopefully better - version of the App, using `TypeScript`.

This project uses [Electron React Builerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) as a starter, usind the `typescript` variant as I don't like `flow`.

This project also gets inspiration from a [Creative Tim](https://www.creative-tim.com) [template](https://www.creative-tim.com/product/light-bootstrap-dashboard-react).

I may also use some things from the [React-Admin](https://github.com/marmelab/react-admin) project in the future.

## Roadmap

1. ~Create main window~
2. Create sidebar
3. Create a default view for `main-window` which loads links to documentation and the inspiration pages above.
4. Create a way to switch projects, which will change what's in the sidebar and the main window.
5. Wire sidebar links to switch out the `view` in the main container
6. ....

## Notes about this build

### File load order

- `app/index.js` => the main entry to the app. _NOTE_ Global styles are loaded here
- `app/Routes.js` => loads the router for the app. Each route takes a `path` and a `component` prop. These are passed to `app/containers/App.js` and handled as child fragment elements.
- `app/containers/Root.js` => Seems to handle `store` and `history`
- `app/container/App.js` => This seems to be the body of the ap
- `app/component/<NAME_FROM_Route.js>` => whichever component was passed as a prop in `Routes.js` is rendered here.
