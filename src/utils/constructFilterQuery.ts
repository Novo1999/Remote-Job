export const constructFilterQuery = (filterBy: {
  locations: string[]
  positions: string[]
  types: string[]
  benefits: string[]
  salary: number
}) => {
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
  query += `salary=${Math.floor(filterBy.salary / 1000)}`

  return query
}
