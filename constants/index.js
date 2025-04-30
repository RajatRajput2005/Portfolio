import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/c++.png",
      link: "https://isocpp.org/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "DSA ",
  
    icon: "/assets/company/dsa.png",
    iconBg: "#E6DEDD",
    date: "October 2023 - Present", 
    points: [
      "Excellent Command on C++ in solving DSA questions ",
    "Solved 300+ Questions on Geeks for Geeks and ranked in top 20 in my Institute",
     "Ninja Dominaotor on CodeStudio and solved 300+ questions on this platform",
     "Solved 300+ Leetcode Problems"
    ],
  },
  {
    title: "Full Stack Developer ",
    // company_name: "Contributor at SWOC",
    icon: "/assets/company/fullstack.png",
    iconBg: "#E6DEDD",
    date: "January 2023 - Preesent",
    points: [
      "Achieved Different Certifications in Web Devlopment and Created many Projects.",
   "key Projects include Smart Space Navigator, SheSync, Kisaan Setu, Rajat's Portfolio, Mental Health Tracker.",
 "Created a SheSync Webpage which is a platform designed to support Womens health and wellness by providing personalized cycle tracking, self-care tips, and community engagement.",
    ],
  },

  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Rajat's Portfolio",
    description:
      "Rajat's Portfoliois a modern portfolio platform that helps creators showcase their work in a beautiful and interactive way. It features 3D elements and smooth animations for an engaging user experience. 🎨✨",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/divios.png",
    source_code_link: "https://github.com/",
    deployed_link: "",
  },
 
  {
    name: "SheSync",
    description:
      "SheSync is a platform designed to support women's health and wellness by providing personalized cycle tracking, self-care tips, and community engagement. It offers a seamless and intuitive interface to help users stay informed about their menstrual health while fostering a supportive space for discussions and shared experiences. 🚀💖",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/She.png",
    source_code_link: "https://github.com/RajatRajput2005/Shesync",
    deployed_link: "https://shesync.netlify.app/",
  },
  
  {
    name: "Kisaan Setu",
    description:
      "Kisaan Setu is a platform connecting farmers with modern agricultural resources, market information, and expert advice. It aims to bridge the gap between traditional farming practices and modern technology. 🌾🚜",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/kisaan.png",
    source_code_link: "https://github.com/RajatRajput2005/KishanSetu",
    // deployed_link: "https://kisaan-setu-f.vercel.app/"
  },
  {
    name: "Smart Space Navigator",
    description:
      "Smart Space Navigator is an innovative Augmented Reality (AR) and Virtual Reality (VR) application designed to provide real-time indoor navigation within complex buildings like hospitals, universities, shopping malls, and corporate offices. The system utilizes AR overlays and immersive VR environments to guide users through indoor spaces where GPS is ineffective. By integrating floor plans with 3D visualization and spatial recognition, users can view interactive routes, points of interest, and contextual information through their smartphones or VR headsets. The project enhances accessibility and efficiency, especially in large facilities with multiple levels or departments.🚀✨",
    tags: [
      {
        name: "Augmented Reality",
        color: "blue-text-gradient",
      },
      {
        name: "Virtual Reality",
        color: "green-text-gradient",
      },
      {
        name: "Immersive 3D",
        color: "pink-text-gradient",
      },
      {
        name: "Unity",
        color: "orange-text-gradient",
      },
      {
        name: "IPS",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/ig.png",
    source_code_link: "https://www.canva.com/design/DAGcoh2PLng/dnafexTw7aPZ2sOdW_SSqw/edit",
    // deployed_link: "https://www.elevate3d.tech/",
  },
 
  {
    name: "Mental Health Tracker ",
    description:
      "It is a mental wellness platform that provides resources, tools, and community support for mental health. It offers guided meditation, journaling, and professional support. 🧘‍♀️💫",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/inner.png",
    source_code_link: "https://github.com/RajatRajput2005/mental-heath-hub",
    // deployed_link: "",
  },

  {
    name: "Genius AI",
    description:
      "Genius AI is a versatile platform leveraging artificial intelligence to process and analyze images, videos, audio, chat, and code. It provides innovative solutions, real-time insights, and automation to enhance creativity, productivity, and decision-making across various domains. 🚀🤖",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/dm.png",
    source_code_link: "https://github.com/RajatRajput2005/Genius-ai-/tree/main",
    // deployed_link: "https://dm-two-pi.vercel.app/",
  },
  {
    name: "Disaster Management",
    description:
      "Disaster Management is a comprehensive platform designed to help communities stay informed and prepared for disasters. It provides real-time data, safety information, and tools for effective disaster response and recovery. 🌍🔔",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      
    ],
    image: "/assets/projects/dm.png",
    source_code_link: "https://github.com/RajatRajput2005/Disaster-Management-",
    deployed_link: "https://disaster-management.vercel.app/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/RajatRajput2005",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/rajat-singh-175a67257/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/Rajatsingh_xx24",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Hustler",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
