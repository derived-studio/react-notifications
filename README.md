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

### With defined id and programmatic removal

```
import { createState, createStore, createNotification } @derived/react-notifier

const store = createStore(createState())
const id = 'test-id'
const notification = createNotification({ id, message: 'hello', remove })
store.dispatch(addNotification(notification))

setTimeout(() => {
    store.dispatch(removeNotification(id))
}, 1000)

```

### With duration

```
import { createState, createStore, createNotification } @derived/react-notifier

const store = createStore(createState())

const notification = createNotification({ message: 'hello',  duration: 2000 })
store.dispatch(addNotification(notification))

```

### With duration adn onRemove callback

```
import { createState, createStore, createNotification } @derived/react-notifier

const store = createStore(createState())

const onRemove = (notification) => console.log('Notification removed', notification)
const notification = createNotification({ message: 'hello',  duration: 2000, onRemove })
store.dispatch(addNotification(notification))

```

### Shorthand version

```
import { createState, createStore, createNotification } @derived/react-notifier
const store = createStore(createState())

// you don't need to call createNotification function
store.dispatch(addNotification({ message: 'hello',  duration: 2000 }))
```
