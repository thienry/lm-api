interface IRepository<T> {
  list: () => Promise<T[]>
  find: (id: string) => Promise<T>
  delete: (id: string) => Promise<T>
  create: (entity: T) => Promise<T>
  update: (entity: T) => Promise<T>
}

export { IRepository }
