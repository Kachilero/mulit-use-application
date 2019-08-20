# Multi-use Application

This application can (or will, since it's not done yet) be used as the base for multiple other
applications that can be ran from the same entry point.

### Goals for the project

- Leverage [Electron](https://electronjs.org/) to create a portable, cross-platform application with a single code base to simplify development
- Use [React](https://reactjs.org/) to create modular pieces of the UI and application to speed up adding new functionality
- Create a plugin system so that the base application can be extended easily
- Use modern web technologies to create an application that can be used even when off-line

### Inspiration/Motivation

Inspired by applications such as

- [Freeter](https://freeter.io/)
- [Wavebox](https://wavebox.io/)
- [Notion](https://www.notion.so/)
- [Tag Spaces](https://www.tagspaces.org/)

and other similar applications that provide "dashboards" of sorts for various tasks, I wanted to
build something similar that I could use to load in personalized 'pages' for various tasks that I
engage in.

From **Freeter** I took the inspiration of being able to create 'project' spaces wherein I could
group any functions, programs, files and directories that would be pertinent to one project.

From **Wavebox** I took the inspiration to be able to load an external website tool
as an embedded 'page'.

From **Notion** I took the inspiration for most of the layout

From **Tag Spaces** I took the inspiration of being able to organize and tag
local files and directories to ease in being able to find things.

I wanted to create an open source project that would take these ideas and make them available
for others to expand on. And in the process show off a bit of my coding knowledge :)

### Approach

Since one of my main goals was to be able to use this on all of the different operating systems
that I must normally switch back and forth from (ie. Linux, MAC and Windows) I settled on using Electron as the
base for the project. Since Electron is based on Chromium and NodeJS it meshes well with my philosophy that
a lot of modern and future applications will integrate the traditional desktop with a web connected interface and backend.

Instead of 'reinventing the wheel' I chose instead to start with the [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
as the starting point for the application. However I chose to use the [Typescript](http://www.typescriptlang.org/) variant
instead of the normal Javascript one for various reasons including:

- Since my first introduction to programing was with strongly typed languages, I have a soft spot for them
- While Javascript's looseness gives it great flexibility to create and display content, it also creates situations when complexity increases wherein it becomes increasingly difficult to track down simple bugs
