import { JobPost } from '@/components/JobItem'

export const mergeAndUnique = (...arrays: string[][]) => {
  const mergedArray = ([] as string[]).concat(...arrays)

  const uniqueArray = mergedArray.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  return uniqueArray
}

export const extractPositions = (jobPosts: JobPost[]): string[] => {
  const allPositions: string[] = []

  jobPosts.forEach((job) => {
    allPositions.push(...job.positions)
  })

  return allPositions
}
