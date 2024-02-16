import moment from 'moment'
export const usePostedDate = (posted: string) => {
  const postedDate = moment(posted)

  const daysAgo = moment().diff(postedDate, 'days')
  let formattedDate = ''

  // showing how many days / weeks / months ago the job was posted by comparing todays date with the date the job has
  switch (true) {
    case daysAgo <= 0:
      formattedDate = 'Today'
      break
    case daysAgo < 7:
      formattedDate = `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`
      break
    case daysAgo < 30:
      formattedDate = `${Math.ceil(daysAgo / 7)} ${
        daysAgo === 7 ? 'week' : 'weeks'
      } ago`
      break
    default:
      formattedDate = `${Math.floor(daysAgo / 30)} ${
        daysAgo === 30 ? 'month' : 'months'
      } ago`
  }

  const mobilePostedAgo =
    formattedDate === 'Today'
      ? 'Today'
      : `${formattedDate?.split(' ')[0]}${formattedDate?.split(' ')[1][0]}`

  return { formattedDate, mobilePostedAgo }
}
