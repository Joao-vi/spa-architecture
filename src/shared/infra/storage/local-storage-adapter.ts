interface IStorage {
  get<T>(key: string): T | undefined
  set<T>(key: string, data: T): void
  remove(key: string): void
}

export class LocalStorageAdapter implements IStorage {
  get<T>(key: string): T | undefined {
    const raw = localStorage.getItem(key)
    if (raw) return JSON.parse(raw)
  }

  set<T>(key: string, data: T): void {
    const parsed = JSON.stringify(data)
    localStorage.setItem(key, parsed)
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }
}
