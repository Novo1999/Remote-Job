import { Dispatch } from '@reduxjs/toolkit'

export interface Job {
  _id: string
  title: string
  salary: {
    min: number
    max: number
  }
  position: string
  new: boolean
  location: string
  jobType: string
  isStarred: {
    userId: Array<string>
  }
  isFeatured: boolean
  isAd: boolean
  companyName: string
  benefits: Array<string>
  appliedBy: {
    userId: Array<string>
  }
  applyCount: number
  viewCount: number
  posted: string
  companyLogo: {
    url: string
  }
  createdBy: string
  jobDescription?: string
  companyDescription?: string
}

export interface GetJobs {
  jobId?: string
  sortBy: string | null
  limit: number
  filterBy?: string
  q?: string
}
export interface GetSimilarJobs {
  id: string
  relevant: string
}

export interface StarJob {
  jobId: string
  userId: string
}

export interface LimitState {
  limit: number
}

export interface FilterBy {
  filterBy: {
    locations: string[]
    positions: string[]
    types: string[]
    benefits: string[]
    salary: number
  }
  filterQuery: string
  isFiltering: boolean
  filterOpen: boolean
}

export interface MultiSelectProps {
  options: string[]
  selected: string[]
  className?: string
  onChange: Dispatch
  category: string
}

export interface FilterParam {
  locations: string[]
  positions: string[]
  types: string[]
  benefits: string[]
  salary: number
}

export interface JobData {
  mostViewedJobs: {
    jobs: Job[]
    count: number
  }
  mostStarredJobs: {
    jobs: Job[]
    count: number
  }
  mostAppliedJobs: {
    jobs: Job[]
    count: number
  }
}
