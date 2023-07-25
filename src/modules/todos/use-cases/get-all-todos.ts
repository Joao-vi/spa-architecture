import { Either } from '../../../shared/core/result'
import { UseCase } from '../../../shared/core/use-case'

export namespace GetAllTodos {
  export type Params = {
    isActive: boolean
    search: boolean
    page: boolean
  }

  export type Response = Promise<Either<void, string>>

  export type Dependencies = {
    repo: any
    store: any
  }
}

class GetAllTodos implements UseCase<GetAllTodos.Params, GetAllTodos.Response> {
  constructor(private readonly deps: GetAllTodos.Dependencies) {}

  async exec(param: GetAllTodos.Params): GetAllTodos.Response {
    throw new Error('Method not implemented.')
  }
}
