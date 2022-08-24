import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fanny Buhlér', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Dev portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Fanny Buhlér',
  subtitle: "I'm a frontend developer at TietoEvry.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Me_round.png',
  paragraphOne: `I'm a junior developer and am often described as service minded with a positive attitude. Lately I've mainly been working with Vue.js, but I'm always up for a creative project to take on.`,
  paragraphTwo: `If you want to you can have a look at my resume below.`,
  paragraphThree: '',
  resume: '/CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'braive_snap.png',
    title: 'Braive',
    info:
      'Braive offers mental health checks and uses evidence based psychology to help you tackle challenges and train your mental skills. I helped them with UX and design for their logged in users, creating a new dashboard showcasing their active programs and progress. The project was delivered in Figma with solutions for both desktop and mobile devices.',
    info2: 'Figma, Design, UX',
    url: 'https://braive.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ricola_snap.png',
    title: 'Ricola',
    info:
      'Ricola is a pioneer in organic herb cultivation and famous for their original Swiss herb drops. This project was a proposal of how Ricola can tell the world about their extensive climate efforts and their goal of going beyond zero-emissions.',
    info2: 'React, Gatsby JAMstack, Agile/Scrum',
    url: 'https://www.ricola.com/en-us',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'frootz_snap.png',
    title: 'Frootz',
    info:
      'This was my first ever vanilla JavaScript game which I created as part of a brief at Hyper Island. The task was to create an interactive page using HTML, CSS and JS. I was to take user input - mouse or keyboard events  - and respond to said input without using frameworks or external libraries. The result was a colorful catch-the-falling-fruits-game.',
    info2: 'Concept, Design, HTML, CSS, JavaScript',
    url: 'https://fannybuhler.github.io/first-JS-game/',
    repo: 'https://github.com/Fannybuhler/first-JS-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Fancy having a chat?`,
  btn: 'Email Me',
  email: 'fanny.buhler1@gmail.se',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fanny-buhl%C3%A9r-9959701b5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Fannybuhler',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
