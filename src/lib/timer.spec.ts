import { Timer } from './Timer'

describe('Timer', () => {
  it("doesn't start by default", () => {
    const timer = new Timer()
    expect(timer.isRunning).toBeFalsy()
  })

  it('ticks based on desired fps setting', async () => {
    const fps = 20
    const delay = 110
    const ticker = new Timer({ fps })
    const cappedHandler = jest.fn()

    ticker.subscribe(cappedHandler)
    ticker.start()

    await wait(delay)

    expect(cappedHandler).toHaveBeenCalled()
    expect(cappedHandler.mock.calls.length).toBeGreaterThan(0)
    expect(cappedHandler.mock.calls.length).toBeLessThanOrEqual(2)
  })

  function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
})
