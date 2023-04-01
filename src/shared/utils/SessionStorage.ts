export abstract class SessionStorage<T> {
  constructor(protected readonly key: string) {}

  abstract getValue(): T | null

  setValue(value: T | null): void {
    const stringifiedValue = JSON.stringify(value)
    sessionStorage.setItem(this.key, stringifiedValue)
  }
}
