import FullStackWebP from '../images/FullstackFinal.webp'
import FullStackPNG from '../images/FullstackFinal.png'
import OldPortolioWebP from '../images/2021PortfolioFinal.webp'
import OldPortfolioPNG from '../images/2021PortfolioFinal.png'
import CountriesWebP from '../images/CountriesFinal.webp'
import CountriesPNG from '../images/CountriesFinal.png'

export const links = {
  gitHub: 'https://github.com/BB2455',
  linkedIn: 'https://www.linkedin.com/in/blair-burke/',
  email: 'blairbcodes@gmail.com',
}

export const aboutMe = {
  title: 'Nice to meet you.',
  content: [
    "I'm a passionate developer and have been working with web technologies since 2021! I've been coding since I was 13 when I got into game development and found myself loving to create.",
    "I'm a self-taught developer and have acquired high-level programming knowledge from multiple sources as online courses like FreeCodeCamp, video tutorials and explanations on YouTube, and other learning mediums like books, podcasts, and official documentation.",
    "I'm quietly confident, naturally curious, and perpetually working on improving myself one project at a time. I'm an avid podcast listener and stay up-to-date with new and upcoming technologies.",
    "I'm open to Job opportunities where I can contribute, learn and grow. If you have an opportunity that matches my skillset and experience, don't hesitate to contact me.",
  ],
  skills: {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Lua'],
    technologies: [
      'React',
      'Gatsby',
      'Node',
      'Express',
      'GraphQL',
      'SASS',
      'JQuery',
      'Git',
    ],
    tools: [
      'GitHub',
      'VSCode',
      'MongoDB',
      'PostgreSQL',
      'SQLAlchemy',
      'Figma',
      'Terminal',
      'AWS',
    ],
  },
}

export const projects = [
  {
    title: 'MERN Full Stack App',
    description:
      "Full Stack with full CRUD functionality includes a fully working login/signup function with email handling verifying accounts and forgotten passwords. Some features include the ability to create, read, update and delete users once signed in and the ability to search users based on name, time created, and the order of the results, lastly the ability to change your password, log out of other sessions, and the ability to delete your account. Built with React for the front end, Express on the backend, and MongoDB for the database, deployed on an AWS EC2 instance using Docker and Docker-Compose, NGINX, and Let's Encrypt for the SSL Certificate.",
    github: 'https://github.com/BB2455/Full-Stack-App',
    liveSite: 'https://www.blairsfullstack.com',
    img: {
      webp: FullStackWebP,
      fallback: FullStackPNG,
    },
  },
  {
    title: '2021 Portfolio',
    description:
      'First portfolio website, crafted in GatsbyJS to showcase my projects, skills, and ways to contact me, first designed in Figma over many designs until finally settling on my 2021 portfolio. Utilizing GraphQL to handle data, Styled-Components for styling, and deployed on Netlify.',
    github: 'https://github.com/BB2455/Portfolio-2021',
    liveSite: 'https://blairb.dev',
    img: {
      webp: OldPortolioWebP,
      fallback: OldPortfolioPNG,
    },
  },
  {
    title: 'Countries API',
    description:
      "TypeScript website developed in React consumes an API endpoint to display clickable countries for more details. Some features include togglable light/dark mode, dynamic pages loading each country's details using React-Router-Dom,  and the ability to search and filter countries.",
    github: 'https://github.com/BB2455/REST-Countries-API',
    liveSite: 'https://blairs-rest-countries-challenge.netlify.app/',
    img: {
      webp: CountriesWebP,
      fallback: CountriesPNG,
    },
  },
]

export const footer = {
  title: 'Blair Burke',
  subTitle: 'A web developer passionate about web development.',
  madeBy: 'Made By Blair Burke 2022',
}
