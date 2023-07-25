import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import todoViewReducer from '../../../modules/todo/store/todo-view-store'

const reduxStore = configureStore({
  reducer: {
    todoView: todoViewReducer,
  },
})

type RootState = ReturnType<typeof reduxStore.getState>
type AppDispatch = typeof reduxStore.dispatch

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { reduxStore, useAppDispatch, useAppSelector }
