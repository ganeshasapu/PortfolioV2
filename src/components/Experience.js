import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)

    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
              initial={{y:50}}
              whileInView={{y:0}}
              transition={{duration: 0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="!my-64">
      <h2 className="font-bold text-8xl w-full mb-32 text-center md:text-6xl sm:4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineering Intern"}
            company={"Onova"}
            s
            companyLink={"https://www.onova.io/"}
            time={"2023-Present"}
            address={"Toronto, CA"}
            work={
              "Creating enterprise hackathon platform for fortune 500 companies."
            }
          />
          <Details
            position={"Software Engineering Intern"}
            company={"Dibbly"}
            s
            companyLink={"https://theurbanwriters.com/"}
            time={"Summer 2023"}
            address={"Toronto, CA"}
            work={
              "Worked on a team to improve and develop features for online platform to connect clients with freelance writers."
            }
          />
          <Details
            position={"Research Lab Developer"}
            company={"UofT RADLab"}
            companyLink={"https://www.radlab.zone/"}
            time={"2022-2023"}
            address={"Toronto, CA"}
            work={
              "Helped develop platform to improve students' mental health using interactive checkins and statistical feedback."
            }
          />
          <Details
            position={"Software Engineer Intern"}
            company={"Accumine Technologies"}
            companyLink={"https://www.radlab.zone/"}
            time={"2022-2023"}
            address={"London, CA"}
            work={
              "Developed UI components as part of design revamp for company's web application."
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience
