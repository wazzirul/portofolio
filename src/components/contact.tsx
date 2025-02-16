'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';

import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import SubmitButton from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('#contact');
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center"
    >
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>Contact me</SectionHeading>
      </Fade>

      <Fade
        direction="up"
        delay={600}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Feel Free to contact me directly through this form
        </p>
      </Fade>

      <Fade
        direction="up"
        delay={800}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <form className="mt-10 flex flex-col dark:text-black">
          <input
            type="email"
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="senderEmail"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="message"
            required
            maxLength={5000}
            placeholder="Your message"
          />
          <SubmitButton text="Submit" />
        </form>
      </Fade>
    </motion.section>
  );
}
