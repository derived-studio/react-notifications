# CHANGELOG

<!-- ## Unreleased -->

## Unreleased

### Styling

- Added notification render mode animations.

### Development

- VSCode formatting config for TypeScript.
- Added `NotificationIcon` component.
- Refactoring: Moved notification types to Notification component.
- Added `NotificationMode` - notification render mode.

### Docs

- Added basic package badges.
- Added motivation section.
- Added couple more features.

## 0.5.2

### Dev App fixes

- Fixed referencing state
- Fixed performance issue

### Effects

- More subtle elastic effect.

## 0.5.1

- Fixed CHANGELOG notes.

## 0.5.0

### Aria support

- Added `alert` role to the notification.

### Usage changes

- Added `onClick` support to notification container.
- Added `createNotificationFactory` method.
- Added static `Notification.types` member exposing notification types.
- Added notification context and `NotificationContextProvider` component.
- Added `useNotifications` hook.
- Added `withNotifications` higher order component.

### Example Changes

- Refactored app with new notification context.

### Styling

- Improved default notification styling.

### Fixes

- Fixed the order of notifications rendered by notification container.

### Example app

- Added Gruppo font family.

## 0.4.0

### New Features

- Added support for notification emoji and asci glyph icons".

### Styling

- Aligned notification progress bar to the right.

### Breaking changes

- Renamed `Container` to `NotificationContainer`.
- Renamed `ContainerProps` to `NotificationContainerProps`.

### Documentation

- Added installation notes.
- Added CHANGELOG.md file.

### Project

- Added husky with `yarn test` cmd on `pre-commit`.

## <= 0.3.4

> ⚠️ Changes were not tracked prior to 0.3.4.
