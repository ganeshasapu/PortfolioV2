import React from 'react'
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/project-1.png";
import project2 from "../../public/images/projects/project-2.png";
import project3 from "../../public/images/projects/project-3.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return (
      <article
        className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative rounded-br-2xl
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full first-letter: h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
}

const Project = ({title, type, img, link, github}) =>{
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full first-letter: h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            placeholder="blur"
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );

}

const projects = () => {
  return (
    <>
      <Head>
        <title>Ganesh Asapu | Projects</title>
        <meta name="description" content="description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="When I'm not working..."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"QuickPosts"}
                img={project1}
                link={"https://devpost.com/software/quickposts"}
                github={"https://github.com/alexrosen45/quickposts"}
                type="Hackathon Project"
                summary={
                  "QuickPosts is a webapp that automates the marketing process for businesses. Simply use your Twitter account to authenticate the app. Then, enter a prompt for a Twitter caption and post, and push the Twitter post to your Twitter account."
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"VaxOptima"}
                img={project2}
                link={"https://github.com/ganeshasapu/VaxOptima"}
                github={"https://github.com/ganeshasapu/VaxOptima"}
                type="School Project"
                summary={
                  "Utilizing the genetic algorithm to find the optimal vaccine distribution strategy for COVID-19 using real-world datasets"
                }
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Sorting Visualizer"}
                img={project3}
                link={"https://github.com/ganeshasapu/Sorting-Visualizer"}
                github={"https://github.com/ganeshasapu/Sorting-Visualizer"}
                type="Personal Project"
                summary={
                  "Visualizes various sorting algorithms including mergesort, quicksort, bubble sort, and more by placing the image pixels into the correct location"
                }
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects