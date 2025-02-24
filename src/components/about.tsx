'use client';
import React from 'react';
import SectionHeading from './section-heading';
import Image from 'next/image';
import { useSectionInView } from '@/lib/useInView';

//Animation
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  const { ref } = useSectionInView('#about');
  return (
    <motion.section
      id="about"
      ref={ref}
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="grid xl:grid-cols-2 lg:text-start gap-8">
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="flex justify-start flex-col">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">My Approach</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    I believe that a well-built website is more than just
                    design—it’s a powerful tool for engagement and growth. My
                    goal is to create seamless, high-performing web experiences
                    that align with your business needs.
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="font-bold mt-6">My Commitment</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
                    I focus on crafting intuitive and visually appealing
                    front-end experiences, ensuring smooth navigation,
                    responsiveness, and accessibility. Every interaction,
                    animation, and layout detail is designed to enhance user
                    engagement and performance across all devices.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src="/profile.jpg"
                width="600"
                height="600"
                alt="portrait"
                quality="100"
                priority={true}
                className="rounded-full object-cover w-[400px] h-[400px] object-top"
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
