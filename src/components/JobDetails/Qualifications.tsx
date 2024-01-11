import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import Tabs from './Tabs'
const Qualifications = () => {
  return (
    <Card className='font-poppins bg-gradient-to-r from-rose-100  to-orange-300 h-fit sm:col-span-2 shadow-lg border border-black'>
      <div className='flex flex-col p-4 gap-2 justify-between'>
        <CardTitle className='text-base lg:text-xl'>Qualifications</CardTitle>
        <CardContent className='text-black'>
          <>
            <li>
              Proven experience as a Frontend Developer, with a strong portfolio
              showcasing successful projects.
            </li>
            <li>
              Expertise in modern frontend technologies such as HTML5, CSS3, and
              JavaScript.
            </li>
            <li>
              Proficiency in at least one modern frontend framework/library
              (e.g., React, Vue.js, Angular).
            </li>
            <li>
              Experience with responsive design and cross-browser compatibility.
            </li>
            <li>
              Strong understanding of user experience (UX) and user interface
              (UI) design principles.
            </li>
            <li>Knowledge of state management and API integration.</li>
            <li>
              Experience with version control systems (e.g., Git) and build
              tools (e.g., Webpack).
            </li>
            <li>
              Ability to collaborate effectively with cross-functional teams,
              including designers and backend developers.
            </li>
            <li>Excellent problem-solving skills and attention to detail.</li>
            <li>Strong communication and interpersonal skills.</li>
            <li>
              Continuous learning mindset, staying up-to-date with the latest
              frontend trends and technologies.
            </li>
            <li>
              Experience leading and mentoring junior developers is a plus.
            </li>
            <li>
              Bachelor&apos;s degree in Computer Science, Engineering, or a
              related field.
            </li>
          </>
        </CardContent>
      </div>
    </Card>
  )
}
export default Qualifications
