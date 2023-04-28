export type Response<T> = {
  count: number
  next?: string
  previous?: string
  results: T
}
