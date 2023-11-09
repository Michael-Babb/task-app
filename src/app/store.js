import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../taskSlice'

export const store = configureStore({
  reducer: {
    taskData: taskReducer,
  },
})