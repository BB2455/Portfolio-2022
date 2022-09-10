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
    "I'm a web developer and have been working with web technologies since 2021! I've been coding since I was 13, when I got into game development, and found myself loving to code.",
    "I'm currently searching for a way to break into this fast-paced industry and looking for opportunities to perpetually get out of my comfort zone and solve complicated challenges. ",
    "Don't hesitate to reach out if you have opportunities you think I might be a good fit.",
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ultrices tellus. Quisque at tempor justo, sed tempus risus. Fusce vitae quam massa. Nam ultrices porta lacus, in imperdiet quam gravida id. Sed et orci metus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ultrices tellus. Quisque at tempor justo, sed tempus risus. Fusce vitae quam massa. Nam ultrices porta lacus, in imperdiet quam gravida id. Sed et orci metus. ',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ultrices tellus. Quisque at tempor justo, sed tempus risus. Fusce vitae quam massa. Nam ultrices porta lacus, in imperdiet quam gravida id. Sed et orci metus. ',
    github: 'https://github.com/BB2455/REST-Countries-API',
    liveSite: 'https://blairs-rest-countries-challenge.netlify.app/',
    img: {
      webp: CountriesWebP,
      fallback: CountriesPNG,
    },
  },
]
