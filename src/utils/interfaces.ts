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
  company: string
  benefits: Array<string>
  applyCount: number
  viewCount: number
  posted: string
}

export interface GetJobs {
  jobId?: string
  sortBy: string | null
  limit: number
  filterBy?: string
  q?: string
}
export interface GetRandomJobs {
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
