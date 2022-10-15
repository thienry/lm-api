interface IRepository<T, K> {
  list: () => Promise<T[]>
  find: (id: string) => Promise<T>
  delete: (id: string) => Promise<T>
  create: (entity: T) => Promise<K>
  update: (entity: T) => Promise<T>
}

export { IRepository }
