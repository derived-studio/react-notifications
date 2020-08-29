# React notifier

> npm: @derived/react-notifier

## Goals

- Developed with Typescript
- Solid code coverage
- No singletons
- Build for speed (no timeouts, uses next animation frame)
- Minimum number of peer dependencies pulled on the demand
- Supports both common and es6 import standards
- Supports custom guid creation
- Supports (but doesn't require) redux store
- Styling support (css, sass, react styles, ...) - TBD

## Usage concept

```
import { createState, createStore, createNotification } @derived/react-notifier/helpers


const store = createStore(createState())

// with defined id
const id = 'test-id'
const notification = createNotification({ id, message: 'hello' })
store.dispatch(addNotification(notification))
setTimeout(() => {
    store.dispatch(removeNotification(id))
}, 1000)

```
