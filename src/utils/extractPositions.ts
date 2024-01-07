import { JobPost } from '@/components/Job/JobItem'

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
    allPositions.push(...job.positions!)
  })

  return allPositions
}
export const extractBenefits = (jobPosts: JobPost[]): string[] => {
  const allPositions: string[] = []

  jobPosts.forEach((job) => {
    allPositions.push(...job.benefits!)
  })

  return allPositions
}
