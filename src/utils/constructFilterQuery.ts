import { FilterParam } from '../../interfaces'

export const constructFilterQuery = (filterBy: FilterParam) => {
  let query = ''

  for (const [property, values] of Object.entries(filterBy)) {
    if (Array.isArray(values) && values.length > 0) {
      // Concatenate values with commas
      const valuesString = values.join(',')

      // Add property and values to the query
      query += `${property}=${valuesString}&`
    }
  }

  // Add the salary to the end of the query
  query += `salary=${Math.floor(filterBy.salary / 1000)}` // the backend is implemented in a way where it uses 100 for 100k but frontend inputs are 100000 so had to do this here, could be handled differently

  return query
}
