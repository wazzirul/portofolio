import { Link, ProjectInfo } from '../lib/types';

export const links: Link[] = [
  {
    nameEng: 'Home',
    hash: '#home',
  },
  {
    nameEng: 'About',
    hash: '#about',
  },
  {
    nameEng: 'Projects',
    hash: '#projects',
  },
  {
    nameEng: 'Skills',
    hash: '#skills',
  },
  {
    nameEng: 'Contact',
    hash: '#contact',
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: 'Orijin',
    description:
      'Connected Packaging Platform that empowers F&B businesses with a suite of digital tools to better inform, connect and reward offline consumers directly from their packaging.',
    tags: ['React', 'Typescript', 'GraphQL', 'Webflow', 'CSS'],
    imageUrl: '/porto-1.jpg',
    link: 'https://orijin.plus/',
    color: '#76B4EA',
  },
  {
    title: 'ViaSlim',
    description:
      'Unlock Your Weight Loss Journey with ViaSlim. Start your journey with confidence. Let’s Get Started with Your Coverage Check',
    tags: ['React', 'Next', 'Bootstrap Scss', 'Typescript'],
    imageUrl: '/viaslim.jpg',
    link: 'https://staging.viaslim.ch/en',
    color: '#AB93E6',
  },
  {
    title: 'Worknook',
    description:
      'Connecting talent with opportunity Explore all the most exciting job roles based on your interest and study major.',
    tags: ['React', 'Next', 'Bootstrap Scss', 'Typescript'],
    imageUrl: '/worknook.jpg',
    link: 'https://stage.worknook.net/',
    color: '#1A7449',
  },
  {
    title: 'Action Againts Islamophobia',
    description:
      'It is crucial to fight against all forms of hate, racism, discrimination, and prejudice wherever it occurs across Australia, as a united community.',
    tags: ['Wordpress', 'Elementor', 'CSS', 'Javascript'],
    imageUrl: '/aai.jpg',
    link: 'https://dev-islamaphobia-register.azurewebsites.net/',
    color: '#ED745C',
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Framer Motion',
  'PHP',
  'Laravel',
  'REST APIs',
  'Wordpress',
  'Elementor',
  'Webflow',
];
