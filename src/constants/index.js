import {
    neuralit,
    tush,
    backend,
    web,
    javascript,
    typescript,
    nextjs,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    flipkart,
    quotes,
    money
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Tush Entertainments Pvt. Ltd.",
      icon: tush,
      iconBg: "#383E56",
      date: "August 2023 - July 2024",
      points: [
          "Developed and deployed 6 React.js Projects",
          "Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
          "Enhanced UI/UX by implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility.",
          "Designed and implemented RESTful APIs to enable seamless communication between the frontend and backend.",
          "Collaborated with a team of developers through code reviews and pair programming.",
          "Implemented lazy loading, caching, and additional performance optimizations to enhance user experience.",
          "https://www.moovi.app/   https://www.huntcinema.app/   https://www.jalva.app/ ", 
      ],
      projects: [
          "moovi.app",
          "jalva.app",
          "huntcinema.online",
          "Additional projects as needed",
      ],
  },

  {
    title: "Frontend Developer - React.js",
    company_name: "Neural IT Pvt. Ltd.",
    icon: neuralit,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
        "Led the modernization of a legacy PHP-based web application by transitioning the front-end to React.js, enhancing user experience and improving maintainability.",
        "Analyzed and restructured the existing codebase to implement a component-based architecture using React.js, ensuring modular and reusable UI components.",
        "Integrated WebSocket functionality to enable real-time updates and improve user interaction.",
        "Developing and working on the ongoing launch of Entrust 2.0 from scratch for a US-based project, focusing on improving user-friendliness and adding features tailored to customer needs.",
    ],
},

  
  ];
  
  const projects = [
    {
      name: "Flipkart Clone",
      description:
        "In this project, I successfully developed a clone of Flipkart, one of India's leading e-commerce platforms, using React.js and Redux Toolkit for state management. ",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: flipkart,
      source_code_link: "https://github.com/Abhimanyuprajapati/Flipkart-clone",
    },
    {
      name: "Quotes Generating",
      description:
        "This project is a simple yet engaging website that generates quotes. Users can refresh the page to receive a new quote, enhancing their motivation and positivity throughout the day. ",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
      ],
      image: quotes,
      source_code_link: "https://github.com/Abhimanyuprajapati",
    },
    {
      name: "Money",
      description:
        "Money is a simple yet effective web application designed to provide users with insights and resources related to stock market investing.",
      tags: [
        {
          name: "HTML & CSS",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
      ],
      image: money,
      source_code_link: "https://github.com/Abhimanyuprajapati",
    },
  ];
  
  export { services, technologies, experiences, projects };