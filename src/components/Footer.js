import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion';
import { LinkedInIcon, GithubIcon, DevPostIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="lg:mb-2">Ganesh Asapu</span>
        <span></span>
        <div className="flex">
          <motion.a
            href="https://github.com/ganeshasapu"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gasapu/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:x-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gasapu/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:x-1 dark:fill-light fill-dark"
          >
            <DevPostIcon />
          </motion.a>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer