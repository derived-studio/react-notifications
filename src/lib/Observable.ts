export interface ISubscriber<TData = void> {
  (data: TData): void
}

export interface IObservable<TData> {
  subscribe: (func: ISubscriber<TData>) => void
  unsubscribe: (func: ISubscriber<TData>) => void
}

export class Observable<TData = void> implements IObservable<TData> {
  private _subs: Set<ISubscriber<TData>>
  private _update: ISubscriber<TData>

  constructor() {
    this._subs = new Set<ISubscriber<TData>>()
  }

  protected notify(data: TData): void {
    this._subs.forEach((sub) => sub(data))
  }

  protected get subscribers(): ISubscriber<TData>[] {
    return Array.from(this._subs)
  }

  subscribe(func: ISubscriber<TData>): void {
    if (this._subs.has(func)) {
      throw new Error('Function already subscribed.')
    }

    this._subs.add(func)
  }

  unsubscribe(func: ISubscriber<TData>): void {
    this._subs.delete(func)
  }

  unsubscribeAll(): void {
    this._subs.forEach(this.unsubscribe)
  }
}
