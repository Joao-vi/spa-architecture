import { Todo } from './todo'

interface TodoRepository {
  getAll(params: any): Promise<Todo[]>
}

export type { TodoRepository }
