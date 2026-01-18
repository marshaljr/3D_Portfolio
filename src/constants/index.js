const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
    icon: "https://cdn.lordicon.com/jeuxydnh.json",
    style: {
      width: "20px",
      height: "20px",
      colors: "primary:#b4b4b4,secondary:#eeca66",
    },
  },
  {
    id: 2,
    name: "About",
    href: "#about",
    icon: "https://cdn.lordicon.com/hmpomorl.json",
    style: {
      width: "20px",
      height: "20px",
      colors: "primary:#b4b4b4,secondary:#eeca66",
    },
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
    icon: "https://cdn.lordicon.com/zhiiqoue.json",
    style: {
      width: "20px",
      height: "20px",
      colors: "primary:#b4b4b4,secondary:#eeca66",
    },
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
    icon: "https://cdn.lordicon.com/vpbspaec.json",
    delay: "1500",
    style: {
      width: "30px",
      height: "30px",
      colors: "primary:#f4dc9c,secondary:#eeca66",
    },
  },
];

// const clientReviews = [
//   {
//     id: 1,
//     name: "Emily Johnson",
//     position: "Marketing Director at GreenLeaf",
//     img: "assets/review1.png",
//     review:
//       "Working with Marshal was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//   },
//   {
//     id: 2,
//     name: "Mark Rogers",
//     position: "Founder of TechGear Shop",
//     img: "assets/review2.png",
//     review:
//       "Marshal’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
//   },
//   {
//     id: 3,
//     name: "John Dohsas",
//     position: "Project Manager at UrbanTech ",
//     img: "assets/review3.png",
//     review:
//       "I can’t say enough good things about Marshal. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//   },
//   {
//     id: 4,
//     name: "Ether Smith",
//     position: "CEO of BrightStar Enterprises",
//     img: "assets/review4.png",
//     review:
//       "Marshal was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
//   },
// ];

const myProjects = [
  {
    title: "SaaS Landing Page",
    desc: "Xora is a modern SaaS platform that empowers to create and distribute content efficiently.",
    subdesc:
      "Built with React, Tailwind CSS, TypeScript, and Framer Motion, Xora ensures fast, scalable, and visually engaging user experiences for creators.",
    href: "https://saa-s-xora.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "3D Portfolio Website",
    desc: "This is an interactive 3D portfolio website that showcases projects in an immersive, real-time environment, allowing users to explore work dynamically.",
    subdesc:
      "Developed with React+Vite, Tailwind CSS, Threejs, Framer Motion, it leverages 3D web technologies and smooth animations to provide a unique, engaging browsing experience.",
    href: "https://www.marshal.com.np/",
    texture: "/textures/project/project2.mp4",
    logo: "https://img.icons8.com/?size=100&id=Mka0KAU6JTjX&format=png&color=000000",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js+Vite",
        path: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Three.js",
        path: "https://img.icons8.com/?size=100&id=j0beBVnUo5dZ&format=png&color=000000",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Movie Search Website",
    desc: "This is a platform for searching and managing latest movies feed, offering users fast access to movie details, reviews, and ratings.",
    subdesc:
      "Built with React, TailwinCSS, Appwrite, Framer Motion, Tankstack query, and tmdb APIs, it provides efficient search functionality, reliable data handling, and real-time updates for users.",
    href: "https://movieweb-theta.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "https://img.icons8.com/?size=100&id=6yzLYhZi1gra&format=png&color=000000",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "Tanstack Query",
        path: "https://tanstack.com/images/logos/logo-color-banner-100.png",
      },
      {
        id: 6,
        name: "TMDB API",
        path: "https://img.icons8.com/?size=100&id=AxHFXpfUuWsm&format=png&color=000000",
      },
    ],
  },
  {
    title: "Youtube Clone",
    desc: "This is a video streaming platform modeled after YouTube, allowing users to watch, upload, and interact with video content seamlessly.",
    subdesc:
      "Implemented using  React+vite, TailwindCSS, Express.js, Framer Motion, Tanstack query, and Rest API, it combines real-time streaming, secure account management, and an intuitive user interface.",
    href: "https://youtube-clone-nu-gold.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: "https://img.icons8.com/?size=100&id=ypQo32SLzp55&format=png&color=000000",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js+Vite",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Express.js",
        path: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "Tanstack Query",
        path: "https://tanstack.com/images/logos/logo-color-banner-100.png",
      },
      {
        id: 6,
        name: "Rest API",
        path: "https://img.icons8.com/?size=100&id=21895&format=png&color=000000",
      },
    ],
  },
  {
    title: "SaaS Landing Page",
    desc: "Xora is a modern SaaS platform that empowers Xora to create and distribute content efficiently.",
    subdesc:
      "Built with React, Tailwind CSS, TypeScript, and Framer Motion, Xora ensures fast, scalable, and visually engaging user experiences for creators.",
    href: "https://saa-s-xora.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

const workExperiences = [
  {
    id: 1,
    name: "JavaScript/TS",
    pos: "Web Development",
    duration: "2019 - 2020",
    title:
      "I built a strong foundation in JavaScript and TypeScript, focusing on writing clean, type-safe code. This experience strengthened my ability to handle both frontend and backend logic.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    animation: "salute",
    level: "Advanced",
    badge: "https://cdn.lordicon.com/nvsfzbop.json",
  },
  {
    id: 2,
    name: "React",
    pos: "Frontend Development",
    duration: "2022 - Present",
    title:
      "I specialize in building dynamic and scalable web applications with React. My focus is on creating reusable components, optimizing performance, and delivering smooth user experiences.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    animation: "victory",
    level: "Advanced",
    badge: "https://cdn.lordicon.com/nvsfzbop.json",
  },
  {
    id: 3,
    name: "Python",
    pos: "Web & App Development",
    duration: "2019 - 2020",
    title:
      "I built a solid foundation in Python, applying it for scripting, backend logic, and web development tasks. This experience helped me strengthen problem-solving skills and understand core programming principles.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    animation: "running",
    level: "Intermediate",
    badge: "https://cdn.lordicon.com/ftasfhkn.json",
  },
  {
    id: 4,
    name: "Tanstack Query",
    pos: "Frontend Development",
    duration: "2022 - Present",
    title:
      "I have deep experience with TanStack Query, leveraging it to manage server state efficiently in React applications. I focus on caching, background updates, and delivering seamless data-fetching experiences.",
    icon: "https://tanstack.com/images/logos/logo-color-600.png",
    animation: "taunt",
    level: "Advanced",
    badge: "https://cdn.lordicon.com/nvsfzbop.json",
  },

  {
    id: 5,
    name: "Next.js",
    pos: "Frontend Development",
    duration: "2021 - Present",
    title:
      "I use Next.js to create fast, SEO-friendly React applications with server-side rendering and static site generation.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    animation: "sitting",
    level: "Intermediate",
    badge: "https://cdn.lordicon.com/ftasfhkn.json",
  },
  {
    id: 6,
    name: "TailwindCSS",
    pos: "Frontend Styling",
    duration: "2022 - Present",
    title:
      "I leverage TailwindCSS to craft modern, responsive, and accessible UIs efficiently. Utility-first styling enables me to rapidly prototype while keeping designs consistent and clean.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    animation: "clapping",
    level: "Advanced",
    badge: "https://cdn.lordicon.com/nvsfzbop.json",
  },

  {
    id: 7,
    name: "Node.js",
    pos: "Backend Developer",
    duration: "2019 - Present",
    title:
      "I design RESTful APIs and backend services with Node.js, ensuring scalability and efficient server-side performance.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    animation: "pointing",
    level: "Intermediate",
    badge: "https://cdn.lordicon.com/ftasfhkn.json",
  },
  {
    id: 8,
    name: "Express.js",
    pos: "Backend Developer",
    duration: "2018 - Present",
    title:
      "I use Express.js to build fast, scalable backend APIs and server-side applications with Node.js.",
    icon: "https://cdn.simpleicons.org/express/FFFFFF",
    animation: "grab",
    level: "Intermediate",
    badge: "https://cdn.lordicon.com/ftasfhkn.json",
  },

  {
    id: 9,
    name: "MongoDB",
    pos: "Database Engineer",
    duration: "2019 - Present",
    title:
      "I work with MongoDB to design flexible NoSQL databases, ensuring performance and scalability for large datasets.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    animation: "strong",
    level: "Intermediate",
    badge: "https://cdn.lordicon.com/ftasfhkn.json",
  },
  {
    id: 10,
    name: "Git & GitHub",
    pos: "Version Control",
    duration: "2018 - Present",
    title:
      "I manage codebases with Git and GitHub, ensuring clean collaboration workflows and efficient version control.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    animation: "magic",
    level: "Advanced",
    badge: "https://cdn.lordicon.com/nvsfzbop.json",
  },
];

export default navLinks;
export { myProjects, calculateSizes, workExperiences };
