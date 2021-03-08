import { ISubscriber, Observable } from './Observable'

export type TimerOptions = { fps?: number }

export type TimerUpdateHandler = ISubscriber<number>

export class Timer extends Observable<number> {
  public fps: number

  private _requestId: number | undefined
  private _updateTime: number | null
  private _running: boolean

  constructor(opts: TimerOptions = {}) {
    super()
    const { fps = 60 } = opts
    this.fps = fps
    this._updateTime = null
    this._running = false
    this._requestId = undefined
  }

  private tick(timestamp?: number) {
    if (!this._updateTime) {
      this._updateTime = timestamp
      this._requestId = window.requestAnimationFrame(this.tick.bind(this))
      return
    }

    const delta = timestamp - this._updateTime
    const delay = 1000 / this.fps

    if (timestamp - this._updateTime >= delay) {
      this._updateTime = timestamp
      this.notify(delta)
    }

    this._requestId = window.requestAnimationFrame(this.tick.bind(this))
  }

  get isRunning(): boolean {
    return this._running
  }

  start(): void {
    this._running = true
    this._requestId = window.requestAnimationFrame(this.tick.bind(this))
  }

  stop(): void {
    this._running = false
    this._updateTime = null
    if (this._requestId) {
      window.cancelAnimationFrame(this._requestId)
    }
  }
}
