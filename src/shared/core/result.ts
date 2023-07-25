type TFail<Error> = {
  isSuccess: false
  error: Error
}

type TSuccess<S> = {
  isSuccess: true
  data: S
}

type Either<Success, Error> = TSuccess<Success> | TFail<Error>

class Result {
  static error<Error>(error: Error): TFail<Error> {
    return {
      isSuccess: false,
      error,
    }
  }

  static success<S>(data: S): TSuccess<S> {
    return {
      isSuccess: true,
      data,
    }
  }
}

export { Result }
export type { Either }
