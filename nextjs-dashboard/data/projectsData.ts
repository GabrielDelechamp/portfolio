export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    category: string;
  };
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: "Eazy Media Website",
      description: `This website was commissioned as part of an internship at Eazy Media. I created it using a mockup created in Figma. Developing this site allowed me to deepen and expand my knowledge of native HTML/CSS.`,
      image: "/images/eazy-website.png",
      link: "https://eazy-media.fr/",
      technologies: ["HTML", "CSS"],
      category: "animation"
    },
    {
      id: 2,
      title: "Leave management",
      description: `This project was a guiding principle for learning the Laravel framework. It interacts with a database and allows CRUD and permission management, and manages access restrictions based on user rights. It also manages an account creation and login system.`,
      image: "/images/gestionconges.png",
      link: "",
      technologies: ["Laravel"],
      category: "game"
    },
    {
      id: 3,
      title: "Carspot Analytics",
      description: `This project is part of my second internship. Its goal is to graphically process and analyze data from a mobile application associated with the company. Carspot Analytics provides a wealth of graphs and data on users and other features of the mobile application. It also includes CRUD management.`,
      image: "/images/carspot_1.png",
      link: "",
      technologies: ["React"],
      category: "blockchain"
    },
    {
      id: 4,
      title: "This Portfolio",
      description: `Designed by me, this portfolio reflects my personality: understated and innovative. This project is useful for my academic career, but also, and more importantly, it showcases my work and my skills!`,
      image: "/images/portfolio.png",
      link: "",
      technologies: ["React"],
      category: "animation"
    },
    {
      id: 5,
      title: "Trajectory Calculator",
      description: `This project was completed as a group over three days. The goal of this software is to calculate the shortest route between different cities in France. After this calculation, the route is displayed on a map.`,
      image: "/images/calculator.png",
      link: "",
      technologies: ["C#", "JavaScript"],
      category: "animation"
    },
  ];
  