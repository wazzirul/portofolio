'use client';
import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import Project from './project-card';
import { useSectionInView } from '@/lib/useInView';

export default function Projects() {
  const { ref } = useSectionInView('#projects', 0.1);
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
