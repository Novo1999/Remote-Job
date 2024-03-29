import * as z from 'zod'
import {
  zodRemoteJobLocations,
  zodRemoteJobPositions,
  zodTypesArray,
} from '../../utils/constants'

const jobTypeEnum = z.enum(zodTypesArray)
const jobLocationEnum = z.enum(zodRemoteJobLocations)
const jobPositionEnum = z.enum(zodRemoteJobPositions)

const initialSchemaObject = {
  title: z.string().min(6, {
    message: 'Job title must be at least 6 characters.',
  }),
  jobType: jobTypeEnum,
  location: jobLocationEnum,
  position: jobPositionEnum,
  benefits: z.array(z.string()).optional(),
  salary: z.string().refine((value) => /^\d+-\d+$/.test(value), {
    message: 'Invalid salary range format. It should be like "MIN-MAX"',
  }),
  jobDescription: z
    .string()
    .min(100, {
      message: 'Job Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Job Description must not be longer than 1000 characters.',
    }),
  companyDescription: z
    .string()
    .min(100, {
      message: 'Company Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Company Description must not be longer than 1000 characters.',
    }),
  companyName: z.string().min(6, {
    message: 'Company Name must be at least 6 characters.',
  }),
}

export const formSchema = z.object(initialSchemaObject)

export const editFormSchema = z.object({
  ...initialSchemaObject,
  jobType: z.string(),
  location: z.string(),
  position: z.string(),
})
