// dynamically set the maximum amount of filter items showed at once
export const setMaxFilterCount = (category: string, showMore: string) => {
  if (showMore === category || category === 'types') {
    return undefined
  } else if (showMore === '' && showMore === category) {
    return 4
  } else return 4
}
