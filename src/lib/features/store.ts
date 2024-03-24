import { configureStore } from '@reduxjs/toolkit'
import adminJobDataReducer from './adminJobData/adminJobDataSlice'
import api from './api/apiSlice'
import filterReducer from './filter/filterSlice'
import limitReducer from './limit/limitSlice'
import loaderReducer from './loader/loaderSlice'
import modalReducer from './modal/modalSlice'
import searchReducer from './search/searchSlice'
import sortReducer from './sort/sortSlice'
import userReducer from './useName/userSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      limit: limitReducer,
      sort: sortReducer,
      search: searchReducer,
      filter: filterReducer,
      loader: loaderReducer,
      modal: modalReducer,
      user: userReducer,
      adminJobData: adminJobDataReducer,
    },
    middleware: (gDM) =>
      gDM({
        serializableCheck: false,
      }).concat(api.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
