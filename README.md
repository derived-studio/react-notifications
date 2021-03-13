[![npm version](https://badgen.net/npm/v/@derived/react-notifications)](https://www.npmjs.com/package/@derived/react-notifications)
[![Minified & Gzipped size](https://badgen.net/bundlephobia/minzip/@derived/react-notifications)](https://bundlephobia.com/result?p=@derived/react-notifications)
[![npm](https://img.shields.io/npm/dm/@derived/react-notifications)](https://www.npmjs.com/package/@derived/react-notifications)

# React notifications

Tiny notification library for React build for speed.

📋 [Release notes](https://github.com/derived-studio/react-notifications/blob/main/CHANGELOG.md)
·
📢 [Issues and requests](https://github.com/derived-studio/react-notifications/issues)

> 🔨🔨🔨 WORK IN PROGRESS 🔨🔨🔨

## Motivation

### Why another notification library?

Needed dependency free, performant notification system that wouldn't choke the browser when run with large amount of notifications.

### What problem does it solves?

Vast majority of packages out there is based on js timers (`setTimeout` or `setInterval`) often being created per displayed notification. Whilst it might not be a problem for small apps with fewer notifications, it has a significant impact on JS thread when running in high performance application with high volume of displayed notification.

### Should you use it?

If you don't care about FPS, then DON'T.  
There are really good and popular packages out there.

## Features

### ⚡ Performance

- [x] Supports large amount of notifications
- [x] Doesn't use `setTimeout` or `setInterval`
- [x] Comes with custom internal timer based on `requestAnimationFrame()`
- [x] Configurable refresh rate (based on desired FPS)
- [ ] GPU based CSS animation (in progress)

### 🎁 ...and more

- [x] Small footprint (~3.2KB)
- [x] Build with TypeScript (types included)
- [x] Single peer dependency: `react`
- [x] Notification container included
- [x] Comes with state management
  - [x] Supports Redux usage
  - [x] Supports Context usage
- [x] Solid test coverage
- [x] Styled with SASS
- [x] No singletons

### What's next?

- [ ] Usage examples
  - [ ] Using with React context
  - [ ] Using with Redux
- [ ] Usage documentation available on Github Pages
<!--
- [ ] Stackable notifications might not happen
      -->

## Installation

With `npm`

```
npm i @derived/react-notification
```

With `yarn`

```
yarn add @derived/react-notification
```
