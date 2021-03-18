# CHANGELOG

<!--
## Unreleased
-->

## 0.7.3

### Styling

- Added auto height to make notification progress compatible with bootstrap.

## 0.7.2

### Fixes

- Disabled mangling dist css files

## 0.7.1

### Styling

- Adjusted items alignment allowing varying notification width.
- Fixed vertical item alignment to keep first added elements visible.

### Refactoring

- Removed redundant use of ref from notification container component.

## 0.7.0

- **IMPORTANT:** Fixed build exports.
- Updated documentation

## 0.6.0

### Styling

- Added notification render mode animations.
- Made notification unselectable by default.

### Examples

- Additional styling
- Updated container types section
- Added a button for each notification type
- Added notification types section
- Added a button for each notification type
- Improved example styling

### Changes

- VSCode formatting config for TypeScript.
- Added `NotificationIcon` component.
- Refactoring: Moved notification types to Notification component.
- Added `NotificationMode` - notification render mode.
- Added github corner link.
- Added style linting rules.

### Fixes

- Fix. Prevented container from triggering pointer events.

### Documentation

- Added development notes.
- Added code quality badge.
- Added package version badge.
- Added download badge.
- Added dependency badges.
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
