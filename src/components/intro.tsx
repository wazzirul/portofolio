'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { Mail } from 'lucide-react';

// Animations
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { useActiveSectionContext } from '@/containers/active-section';

export default function Intro() {
  const { ref } = useSectionInView('#home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/about-zirul.jpg"
              width={480}
              height={480}
              alt="portrait"
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            Hi, I&apos;m Wazirul – A Passionate Web Developer
          </span>{' '}
          <p className="text-[14px]">
            Creating seamless and engaging digital experiences with React,
            Next.js, and modern web technologies.
          </p>
        </h1>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          // href="mailto:mwazirulazzan@gmail.com"
          href="#contact"
          onClick={() => {
            setActiveSection('#contact');
            setTimeOfLastClick(Date.now());
          }}
          className="group cursor-pointer bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 motion-safe:transition-all dark:bg-white/10 dark:text-white/60"
        >
          Connect <Mail color="#9ca3af" />
        </Link>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/wazirul/"
          className="p-4 cursor-pointer bg-gray-900 text-white flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950 active:scale-105 motion-safe:transition-all dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          target="_blank"
          href="https://github.com/wazzirul"
          className="p-4 cursor-pointer bg-gray-900 text-white flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950 active:scale-105 motion-safe:transition-all dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
