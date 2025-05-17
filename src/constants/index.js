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
    money,
    TaskTrackerApplication,
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
    title: "Frontend Developer - React.js",
    company_name: "Neural IT Pvt. Ltd.",
    icon: neuralit,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
        "Developed the frontend architecture of modern web applications like Entrust 2.0 and NextWave, delivering key features such as:",
        "🛡️ Role-Based Access Control (RBAC)",
        "👤 Masquerade Login for Admins",
        "💳 Auto-Swipe Billing System",
        "📁 Case Management System",
        "📦 Prepaid & Postpaid Flow",
        "📨 Sharebox for Secure File Sharing",
        "📄 Invoice Generation",
        "https://entrustv2.neuralit.com/  https://v2.nextwave.world/", 
    ],
     projects: [
      "entrustv2.neuralit.com",
      "v2.nextwave.world",
  ],
},

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

  
  ];
  
  const projects = [
     {
      name: "TaskTrackerApplication",
      description:
       "TaskTrackerApplication is a full-stack task management app built with React.js, Tailwind CSS, Node.js, and MongoDB. It supports OTP email verification, project CRUD, profile image upload, recent activity tracking, and a feedback form, with email notifications via Nodemailer.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "React Query",
          color: "green-text-gradient",
        },
        {
          name: "Node js",
          color: "pink-text-gradient",
        },
      ],
      image: TaskTrackerApplication,
      source_code_link: "https://github.com/Abhimanyuprajapati/TaskTrackerApplication",
      link: "https://task-tracker-application-two.vercel.app"
    },
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
       link: "#"
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
      link: "#"
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
      link: "#"
    },
  ];

  const testimonials = [
    {
      college: "Ramanand Arya D.A.V. College",
      degree: "Bachelor of Science in Information Technology",
      year: "June 2019 - April 2022"
    },    
    {
      college: "Sandesh College of Arts, Commerce & Science",
      degree: "Intermediate (Class XII) in Science",
      year: "June 2017 - April 2019"
    },
    {
      college: "Padmavati Venkatesh High School",
      degree: "Matriculation (Class X)",
      year: "June 2016 - April 2017"
    }    
   
  ];

  const certification = [
    {
      college: "Newton School (Bangalore)",
      degree: "Full Stack Web Development",
      year: "October 2022 - June 2023",
      details: [
        "Problem Solving (Data Structure and Algorithms)",
        "Technical Stack Learnt: HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Java, Git, and GitHub",
        "Basic working backend knowledge: Node.js, Express.js, MongoDB, Postman, RESTful API",
        "Basic knowledge of AWS and Docker",
        "Participated in various coding competitions held by Newton School"
      ]
    } 
  ];
  
  export { services, technologies, experiences, projects, testimonials, certification };