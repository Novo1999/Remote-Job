import {
  remoteJobBenefits,
  remoteJobLocations,
  remoteJobPositions,
  typesArray,
  zodRemoteJobBenefits,
  zodRemoteJobLocations,
  zodRemoteJobPositions,
  zodTypesArray,
} from '../../utils/constants'
import * as z from 'zod'

const jobTypeEnum = z.enum(zodTypesArray)
const jobLocationEnum = z.enum(zodRemoteJobLocations)
const jobBenefitsEnum = z.enum(zodRemoteJobBenefits)
const jobPositionEnum = z.enum(zodRemoteJobPositions)

export const formSchema = z.object({
  title: z.string().min(6, {
    message: 'Job title must be at least 6 characters.',
  }),
  jobType: jobTypeEnum,
  location: jobLocationEnum,
  position: jobPositionEnum,
  benefits: z.array(z.string()),
  salary: z.string().refine((value) => /^\d+-\d+$/.test(value), {
    message: 'Invalid salary range format. It should be like "50-60"',
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
  companyImage: z.string(),
  // companyImage: z.object({
  //   image: z
  //     .any()
  //     .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 2MB.`)
  //     .refine(
  //       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //       'Only .jpg, .jpeg, .png and .webp formats are supported.'
  //     ),
  // }),
})
