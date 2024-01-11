import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { BsStars } from 'react-icons/bs'
const Qualifications = () => {
  return (
    <section className='font-poppins h-fit sm:col-span-2 bg-transparent'>
      <div className='flex flex-col gap-2 justify-between'>
        <CardTitle className='text-base lg:text-xl flex items-center text-white bg-black px-2 py-1 rounded-md'>
          <BsStars />
          Qualifications
        </CardTitle>
        <div className='text-black'>
          <li>
            Proven experience as a Frontend Developer, with a strong portfolio
            showcasing successful projects.
          </li>
          <li>
            Expertise in modern frontend technologies such as HTML5, CSS3, and
            JavaScript.
          </li>
          <li>
            Proficiency in at least one modern frontend framework/library (e.g.,
            React, Vue.js, Angular).
          </li>
          <li>
            Experience with responsive design and cross-browser compatibility.
          </li>
          <li>
            Strong understanding of user experience (UX) and user interface (UI)
            design principles.
          </li>
          <li>Knowledge of state management and API integration.</li>
          <li>
            Experience with version control systems (e.g., Git) and build tools
            (e.g., Webpack).
          </li>
        </div>
      </div>
    </section>
  )
}
export default Qualifications
