import { FilterBy } from '@/utils/interfaces'
import { createSlice } from '@reduxjs/toolkit'

export type Category = 'locations' | 'positions' | 'types' | 'benefits'

const initialState: FilterBy = {
  filterBy: {
    locations: [],
    positions: [],
    types: [],
    benefits: [],
    salary: 75000,
  },
  filteredJobs: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const category = action.payload.category as Category
      const stateCategory = state.filterBy[category]
      const { newOption } = action.payload
      // if option already exists, remove it
      if (stateCategory.includes(newOption)) {
        const optionToRemove = stateCategory.findIndex(
          (opt) => opt === newOption
        )
        stateCategory.splice(optionToRemove, 1)
      } else {
        // add new option if it does not exist
        state.filterBy = {
          ...state.filterBy,
          [category]: [...stateCategory, newOption],
        }
      }
    },
    changeSalary: (state, action) => {
      state.filterBy.salary = action.payload
    },
    setFilteredJobs: (state, action) => {
      state.filteredJobs = action.payload
    },
  },
})

export const { changeFilter, changeSalary, setFilteredJobs } =
  filterSlice.actions
export default filterSlice.reducer
