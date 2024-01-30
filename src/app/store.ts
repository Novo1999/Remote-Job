import { configureStore } from '@reduxjs/toolkit'
import api from './features/api/apiSlice'
import limitReducer from './features/limit/limitSlice'
import sortReducer from './features/sort/sortSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    limit: limitReducer,
    sort: sortReducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
