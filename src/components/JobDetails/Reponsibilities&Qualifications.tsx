import { FaCheckCircle } from 'react-icons/fa'
import { CardTitle } from '../ui/card'
import Qualifications from './Qualifications'

const ResponsibilitiesAndQualifications = () => {
  {
    /* just some dummy data here */
  }
  return (
    <>
      <p>
        We are looking for a Senior Symfony developer with commercial experience
        for one of our clients. You are a perfect candidate if you are
        growth-oriented, you love what you do, and you enjoy working on new
        ideas to develop exciting products and growth features.
      </p>
      <CardTitle className='text-base lg:text-xl bg-black text-white rounded-md px-2 py-1 flex items-center gap-2'>
        <FaCheckCircle />
        Responsibilities
      </CardTitle>
      <div className='text-xs leading-6 flex flex-col gap-6 sm:gap-20 text-black lg:text-base h-fit'>
        <span>
          <li>
            Work as part of a team to deliver digital solutions across web and
            mobile platforms
          </li>
          <li>
            Translate high-level requirements into executable software designs
          </li>
          <li>
            Implement software solutions using Symfony / PHP programming
            language
          </li>
          <li>
            Ensure all code is thoroughly tested and meets development criteria
          </li>
          <li>Identify and address technical debt in the codebase</li>
        </span>
      </div>
      <Qualifications />
    </>
  )
}

export default ResponsibilitiesAndQualifications
