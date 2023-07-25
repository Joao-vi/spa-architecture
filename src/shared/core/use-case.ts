interface UseCase<Param, Result> {
  exec(param: Param): Result
}

export type { UseCase }
