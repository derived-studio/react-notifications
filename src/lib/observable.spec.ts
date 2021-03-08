import { Observable } from './Observable'

describe('Observable', () => {
  class Subject extends Observable<string> {
    notify(value: string) {
      super.notify(value)
    }
  }

  it('notifies subscribed observers', () => {
    const subject = new Subject()

    const observerOne = jest.fn()
    const observerTwo = jest.fn()

    subject.subscribe(observerOne)
    subject.subscribe(observerTwo)

    const message = 'Hello there'
    subject.notify(message)

    expect(observerOne).toHaveBeenCalledTimes(1)
    expect(observerOne).toHaveBeenCalledWith(message)

    expect(observerTwo).toHaveBeenCalledTimes(1)
    expect(observerTwo).toHaveBeenCalledWith(message)
  })
})
