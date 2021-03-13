[![npm version](https://badgen.net/npm/v/@derived/react-notifications)](https://www.npmjs.com/package/@derived/react-notifications)
[![Minified & Gzipped size](https://badgen.net/bundlephobia/minzip/@derived/react-notifications)](https://bundlephobia.com/result?p=@derived/react-notifications)
[![npm](https://img.shields.io/npm/dm/@derived/react-notifications)](https://www.npmjs.com/package/@derived/react-notifications)

# React notifications

Tiny Notification library for React build for speed.

> 🔨🔨🔨 WORK IN PROGRESS 🔨🔨🔨

## Why another notification library?

Needed fast notification system that wouldn't choke the browser when run with large amount of notifications.

## Design objectives

- [x] Blazing fast (supports large amount of notifications)
- [x] Doesn't use `setTimeout` or `setInterval`
- [x] Build with TypeScript (types included)
- [x] Single peer dependency `react`
- [x] Solid code coverage
- [x] Styling with SASS
- [x] Minimal footprint

## Features

- [x] Supports (but doesn't require) redux store
- [x] Configurable refresh (rate based on desired FPS)
- [x] Comes with timer based on `requestAnimationFrame`
- [x] No singletons

## What's next?

- [ ] Usage example code
- [ ] Usage example docs
- [ ] Documentation published to Github pages
- [ ] Stackable notifications
- [ ] Animations

## Installation

With `npm`

```
npm i @derived/react-notification
```

With `yarn`

```
yarn add @derived/react-notification
```
