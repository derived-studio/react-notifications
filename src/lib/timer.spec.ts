import { Timer } from './Timer'

describe('Timer', () => {
  it("doesn't start by default", () => {
    const timer = new Timer()
    expect(timer.isRunning).toBeFalsy()
  })

  it('ticks based on desired fps setting', async () => {
    const fps = 10
    const ticker = new Timer({ fps })
    const cappedHandler = jest.fn()

    ticker.subscribe(cappedHandler)
    ticker.start()

    const frameTime = 1000 / fps
    const expectedCalls = 3
    await wait(frameTime * (expectedCalls + 0.5)) // wait additional half frame
    expect(cappedHandler).toHaveBeenCalledTimes(expectedCalls)
  })

  it('stops the timer', async () => {
    const timer = new Timer()
    expect(timer.isRunning).toBeFalsy()
    timer.start()
    expect(timer.isRunning).toBeTruthy()
    timer.stop()
    expect(timer.isRunning).toBeFalsy()
  })

  function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
})
