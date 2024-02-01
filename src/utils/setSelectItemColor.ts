export const setSelectItemColor = (category: string) => {
  if (category === 'locations') {
    return 'bg-red-400'
  }
  if (category === 'types') {
    return 'bg-blue-400'
  }
  if (category === 'benefits') {
    return 'bg-purple-400'
  }
  if (category === 'positions') {
    return 'bg-teal-400'
  }
}
