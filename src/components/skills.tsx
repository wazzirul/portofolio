'use client';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/useInView';

import { motion } from 'framer-motion';
import { init } from 'next/dist/compiled/webpack/webpack';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('#skills');
  return (
    <section
      ref={ref}
      id="skills"
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={index}
            className="bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
