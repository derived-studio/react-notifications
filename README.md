[![dependencies Status](https://status.david-dm.org/gh/derived-studio/react-notifications.svg)](https://david-dm.org/derived-studio/react-notifications)
[![devDependencies Status](https://status.david-dm.org/gh/derived-studio/react-notifications.svg?type=dev)](https://david-dm.org/derived-studio/react-notifications?type=dev)
[![peerDependencies Status](https://status.david-dm.org/gh/derived-studio/react-notifications.svg?type=peer)](https://david-dm.org/derived-studio/react-notifications?type=peer)  
[![npm version](https://badgen.net/npm/v/@derived/react-notifications)](https://www.npmjs.com/package/@derived/react-notifications)
[![Minified & Gzipped size](https://badgen.net/bundlephobia/minzip/@derived/react-notifications)](https://bundlephobia.com/result?p=@derived/react-notifications)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c99c6a2921fb42079572db10cb79b122)](https://www.codacy.com/gh/derived-studio/react-notifications/dashboard?utm_source=github.com&utm_medium=referral&utm_content=derived-studio/react-notifications&utm_campaign=Badge_Grade)
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

- [x] Sustained high performance for large amount of notifications
- [x] Internal timer is based on `requestAnimationFrame()`
- [x] Timer with configurable (throttled) refresh rate based on desired FPS
- [x] No use of `setTimeout` or `setInterval`
- [x] GPU based CSS animation (in progress)

### 🎁 ...and more

- [x] Small footprint (~3.2KB)
- [x] Build with TypeScript (types included)
- [x] Single peer dependency: `react`
- [x] Notification container included
- [x] Comes with state management
  - [x] Supports React Context
  - [x] Can easily be used with Redux
- [x] Solid test coverage
- [x] Styled with SASS
- [x] No singletons

### What's next?

- [ ] Usage examples
  - [x] Using with React context
  - [ ] Using with Redux
- [ ] Usage documentation available on Github Pages

## Installation

With `npm`

```
npm i @derived/react-notification
```

With `yarn`

```
yarn add @derived/react-notification
```

## Development

1. Clone your forked repository.
2. Run `yarn` to install dev dependencies and setup git hooks.
3. Start server with `yarn dev`.
4. Have fun!
