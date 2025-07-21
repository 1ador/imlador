const projects = [
  {
    id: "near-buy",
    title: "Near-Buy",
    description: "A web app that offers an innovation solution to the challenges of every consumers who wants to discover the best discounts, promotions and special offers available online.",
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
    description: "An injury-tracking web platform to help companies monitor and prevent workplace injuries.",
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
    description: "A mobile app that helps construction consultant companies to conduct building conditions assessment.",
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

export default projects;
