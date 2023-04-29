import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image';
import { useMotionValue, useSpring, useInView, spring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})
      useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
      }, [isInView, value, motionValue]);

    useEffect(() =>{
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>Ganesh Asapu | About Page</title>
        <meta name="description" content="description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="A bit about me..."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75p">
                About Me
              </h2>
              <p className="font-medium">
                Hi there! My name is Ganesh Asapu and I am a first-year student
                at the University of Toronto studying CS. Although I am just
                starting my journey in the industry, I have a strong foundation
                in web-development and am a part of a variety of computer
                science clubs at UofT including UofT Blueprint and UofT AI.
              </p>
              <p className="my-4 font-medium">
                In my free time, I have several hobbies that I enjoy. Recently,
                I started learning the piano and it has become a passion of mine
                that I enjoy spending time on. I also enjoy the mental challenge
                and satisfaction that comes with solving Rubiks cubes. In
                addition, I make an effort to stay active by going to the gym on
                a regular basis and I enjoy reading books on philosophy in my
                downtime.
              </p>
              <p className="font-medium">
                I am a strong believer in the power of collaboration and enjoy
                working on team projects, as well as learning from more
                experienced developers. I am excited to continue my journey as a
                software developer and am always open to new opportunities and
                challenges. Please feel free to reach out!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:order-1 " />
              <Image
                src={profilePic}
                alt="Ganesh Asapu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              ></Image>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Passionate
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Hard-working
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl  ">
                  <AnimatedNumbers value={1} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Bad with percentages
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience className="my-64" />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about