# Mulit-use Application V2

A second - hopefully better - version of the App, using `TypeScript`.

This project uses [Electron React Builerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) as a starter, usind the `typescript` variant as I don't like `flow`.

This project also gets inspiration from a [Creative Tim](https://www.creative-tim.com) [template](https://www.creative-tim.com/product/light-bootstrap-dashboard-react).

I may also use some things from the [React-Admin](https://github.com/marmelab/react-admin) project in the future.

## Roadmap

1. **DONE** => Create main window
2. **DONE** => Create sidebar
3. **DONE** => Create a default view for `main-window` which loads links to documentation and the inspiration pages above as well as this README.
4. Create "Default" apps for the header menu
   - Let's start with a timer widget that goes up or down
5. **Widget System** - I'm not sure how I'm gonna do this, but I need a way to load widgets into the main window
6. **Layout System** - Need some way for the user to easely modify the layout.
7. Create a way to switch projects, which will change what's in the sidebar and the main window.
8. Need to adjust the way the side bar builds the menus so that I can switch to an accordion or something else when I want
9. Have a way for the side drawer to collapse down, and the main window to take up the space.

## Notes about this build

### Structure

The following is a rough representation of how the App is structured - not the file structure - that's next.

```
__LAYOUT { each layout would be a 'project' }
  |__VIEW { each view is a layout inside a project which is accessible by the side bar menu }
    |__COMPONENTS { components are the individual pieces of information in each view }
```

This is a breakdown of the file structure

- app { development app files }

  - components
    - global { these are used for the basic presentation of the app }
  - constants { for non-changing variables, originally routes and defaults but is probably changing }
  - containers { originally these were the encompasing components, but I have changed it to be layouts. See note }
  - dist { compiled app }
  - layouts { These layouts define each project and what components are displayed }
  - store { Redux store files }
    - NAMED_FOLDERS { each of these holds the actions, reducers and type definitions needed by its named component }
  - styles { SCSS style folders and files }

    - globals { styling that is applied globally }

      - bootstrap { import needed bootstrap styles here }

### Notes

- One thing that is only briefly mentioned in the Redux [docs](https://redux.js.org/basics/usage-with-react) is that
  - **Presentational Components** ONLY change data by invoking callbacks
  - **Container Components** USE REDUX

### File load order

- `app/index.js` => the main entry to the app. _NOTE_ Global styles are loaded here
- `app/Routes.js` => loads the router for the app. Each route takes a `path` and a `component` prop. These are passed to `app/containers/App.js` and handled as child fragment elements.
- `app/containers/Root.js` => Seems to handle `store` and `history`
- `app/container/App.js` => This seems to be the body of the ap
- `app/component/<NAME_FROM_Route.js>` => whichever component was passed as a prop in `Routes.js` is rendered here.
