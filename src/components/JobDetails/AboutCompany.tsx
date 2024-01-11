import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
const AboutCompany = () => {
  return (
    <Card className='font-poppins bg-gradient-to-r from-teal-200 to-lime-200 h-fit'>
      <CardHeader>
        <CardTitle>About Company</CardTitle>
        <CardDescription className='text-xs leading-6 text-black lg:text-base'>
          Tech Co is a dynamic and innovative company specializing in the field
          of technology and software development. Known for its cutting-edge
          solutions and forward-thinking approach, Tech Co is at the forefront
          of the industry. The company is committed to delivering high-quality
          digital products and services that cater to the evolving needs of its
          clients. With a strong focus on web development, Tech Co leverages
          modern technologies such as React JS and CSS to create seamless and
          visually appealing user interfaces. The company&apos;s dedication to
          staying ahead of industry trends is evident in its pursuit of
          continuous improvement in frontend architecture. Tech Co fosters a
          collaborative work environment where cross-functional teams, including
          frontend and backend developers, designers, and other professionals,
          work together to bring innovative ideas to life. The company places a
          premium on talent development, providing opportunities for skill
          enhancement and growth. As a tech enthusiast, you&apos;ll find Tech Co
          to be an exciting and vibrant workplace, where creativity and
          technical expertise converge to create impactful digital solutions.
          Whether it&apos;s through developing state-of-the-art web applications
          or exploring new technologies, Tech Co remains dedicated to pushing
          the boundaries of what&apos;s possible in the tech industry.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
export default AboutCompany
