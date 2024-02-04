import { configureStore } from '@reduxjs/toolkit'
import api from './api/apiSlice'
import limitReducer from './limit/limitSlice'
import sortReducer from './sort/sortSlice'
import searchReducer from './search/searchSlice'
import filterReducer from './filter/filterSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      limit: limitReducer,
      sort: sortReducer,
      search: searchReducer,
      filter: filterReducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
