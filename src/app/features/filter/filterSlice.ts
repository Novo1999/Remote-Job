import { createSlice } from '@reduxjs/toolkit'

interface FilterBy {
  filterBy: {
    locations: string[]
    positions: string[]
    types: string[]
    benefits: string[]
    salary: number
  }
}

type Category = 'locations' | 'positions' | 'types' | 'benefits'

const initialState: FilterBy = {
  filterBy: {
    locations: [],
    positions: [],
    types: [],
    benefits: [],
    salary: 75000,
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const category = action.payload.category as Category
      const { newOption } = action.payload
      if (state.filterBy[category].includes(newOption)) {
        const optionToRemove = state.filterBy[category].findIndex(
          (opt) => opt === newOption
        )
        state.filterBy[category].splice(optionToRemove, 1)
      } else {
        state.filterBy = {
          ...state.filterBy,
          [category]: [...state.filterBy[category], newOption],
        }
      }
    },
    changeSalary: (state, action) => {
      state.filterBy.salary = action.payload
    },
  },
})

export const { changeFilter, changeSalary } = filterSlice.actions
export default filterSlice.reducer
