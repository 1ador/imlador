const prefixPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const processProjectImages = (projects) =>
  projects.map((project) => {
    const updatedImage = {
      ...project.image
    };

    for (const key in updatedImage) {
      if (Array.isArray(updatedImage[key])) {
        updatedImage[key] = updatedImage[key].map((p) => prefixPath(p));
      } else {
        updatedImage[key] = prefixPath(updatedImage[key]);
      }
    }

    return {
      ...project,
      image: updatedImage,
    };
  });

const rawProjects = [{
    id: "near-buy",
    title: "Near-Buy",
    description: "...",
    tags: ["Javascript", "HTML", "CSS", "Firebase"],
    hasMobileView: false,
    image: {
      hero: "/assets/nearbuy-hero.png",
      landing: "/assets/nearbuy-landing.png",
      tech: "/assets/nearbuy-techstack.png",
      preview: "/assets/nearbuy-preview.png",
    },
    role: "Frontend developer",
    date: "2024",
    url: "https://shaka-near-buy.netlify.app/"
  },
  {
    id: "helpmet",
    title: "Helpmet",
    description: "...",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    hasMobileView: false,
    image: {
      hero: "/assets/helpmet-hero.png",
      landing: "/assets/helpmet-landing.png",
      tech: "/assets/helpmet-techstack.png",
      preview: "/assets/helpmet-preview.png",
    },
    role: "Fullstack developer",
    date: "2024",
    url: "https://helpmet.ca/"
  },
  {
    id: "evalo",
    title: "Evalo",
    description: "...",
    tags: ["Typescript", "Apollo", "Go", "PostgreSQL"],
    hasMobileView: true,
    image: {
      hero: "/assets/evalo-hero.png",
      landing: "/assets/evalo-landing.png",
      tech: "/assets/evalo-techstack.png",
      preview: "/assets/evalo-preview.png",
      mobile: [
        "/assets/evalo-phone-1.png",
        "/assets/evalo-phone-2.png",
        "/assets/evalo-phone-3.png",
        "/assets/evalo-phone-4.png",
      ]
    },
    role: "Frontend developer",
    date: "2025",
    url: "https://evalo.wmdd.ca/"
  }
];

const projects = processProjectImages(rawProjects);
export default projects;
